<template>
  <div id="app">
    <h1>Election Results</h1>

    <DataForm></DataForm>
    <Map></Map>

    <!-- conditionally render element based on newResults array in global state -->
    <pre class="debug" v-for="(result, index) in newResults" :key="index">
      {{ result }}
    </pre>
  </div>
</template>

<script>
import DataForm from "./components/DataForm.vue";
import Map from "./components/Map.vue";

export default {
  name: "app",
  components: {
    Map,
    DataForm
  },
  // lifecycle method to fetch data
  created: function() {
    this.$store.dispatch("fetchData");
  },
  // use computed method to ensure this reloads on store.state changes
  computed: {
    newResults() {
      return this.$store.state.newResults;
    }
  }
};
</script>

<style lang="scss"></style>
