<template>
  <div id="app">
    <h1>Election Results</h1>
  </div>
</template>

<script>
export default {
  name: "app",
  created: function() {
    this.$store.dispatch("fetchData");
  }
};
</script>

<style lang="scss"></style>
