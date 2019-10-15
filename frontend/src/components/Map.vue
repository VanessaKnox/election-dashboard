<template>
  <div id="map">
    <h3>Election Map</h3>
  </div>
</template>

<script>
export default {
  computed: {
    states() {
      return this.$store.state.states;
    }
  }
};
</script>

<style lang="scss" scoped>
#map {
  border: 1px solid red;
  height: 300px;
  width: 500px;
}
</style>
