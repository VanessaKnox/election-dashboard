import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Vuex store registered in main.js, accessible globally as this.$store
export default new Vuex.Store({
  state: {
    states: {}, // for state geojson
    results: {}, // for election results
    newResults: [] // for user entered data
  },
  // mutations make changes to state
  mutations: {
    ADD_RESULT(state, result) {
      // append submitted result to array
      state.newResults.push(JSON.stringify(result)); // stringify to serialize input data
    },
    FETCH_DATA(state, data) {
      console.log("data fetched");
      state.states = data.states;
      state.results = data.results;
    }
  },
  // actions called by components to mutate state
  actions: {
    addResult({ commit }, result) {
      commit("ADD_RESULT", result);
    },
    fetchData({ commit }) {
      const electionUrl =
        "https://gist.githubusercontent.com/bfreeds/16bb7a411f1c88a4d988391071cfd850/raw/ce6be9621ec0452ec3c484e3553ae9eb5baea51e/elections.json";
      const statesUrl =
        "https://gist.githubusercontent.com/bfreeds/6a93787b13e2c458bda2bffc09b9120b/raw/17e22372aacb0e277f2235cb4ea054bf7f170e35/states.geojson";

      // VueAxios plugin instantiated in main.js
      Vue.axios
        .all([Vue.axios.get(electionUrl), Vue.axios.get(statesUrl)])
        .then(
          Vue.axios.spread((electionResponse, statesResponse) => {
            // define object with data from both get requests to pass to mutator
            const data = {
              states: statesResponse.data,
              results: electionResponse.data
            };

            commit("FETCH_DATA", data);
          })
        )
        .catch(err => {
          console.log(err);
        });
    }
  }
});
