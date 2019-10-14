import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Vuex store registered in main.js, accessible globally as this.$store
export default new Vuex.Store({
  state: {
    results: {} // for election geojson, async loaded
  },
  // mutations make changes to state
  mutations: {
    FETCH_DATA(state, data) {
      state.results = data;
    }
  },
  // actions called by components to mutate state
  actions: {
    fetchData({ commit }) {
      const dataUrl =
        "https://gist.githubusercontent.com/bfreeds/16bb7a411f1c88a4d988391071cfd850/raw/ce6be9621ec0452ec3c484e3553ae9eb5baea51e/elections.json";

      // VueAxios plugin instantiated in main.js
      Vue.axios
        .get(dataUrl)
        .then(response => {
          console.log(response.data);

          commit("FETCH_DATA", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});
