<template>
  <div id="map">
    <!-- define our svg template -->
    <svg :height="height" :width="width">
      <!-- background -->
      <rect :height="height" :width="width" class="background"></rect>

      <!-- map layers -->
      <g id="layers">
        <!-- states -->
        <path
          v-for="(d, index) in mapData"
          :key="index"
          :d="d.path"
          class="state"
        ></path>
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  data() {
    return {
      height: null,
      width: null
    };
  },
  created: function() {
    console.log("Map.vue created");
  },
  mounted: function() {
    // calculate the DOM element's dimensions to bind to svg template
    console.log(
      "Map.vue mounted, calculating height and width to pass to D3 visualization."
    );
    const rect = this.$el.getBoundingClientRect();
    console.log({ rect: rect, width: rect.width, height: rect.height });
    // set component height and width to calculated DOM dimensions
    this.width = rect.width;
    this.height = rect.height;
  },
  computed: {
    states() {
      // geojson from vuex store
      return this.$store.state.states;
    },
    mapData() {
      // make sure states geojson async fetch is completed before trying to calculate path data.  Vue computed properties are reactive - so this will not run while waiting for states to be fetched, but once it's added to Vuex store mapData will update & render the SVG template
      if (this.states.features === undefined) {
        return [];
      }
      // use d3 math to calculate svg path for template
      const projection = d3
        .geoAlbersUsa()
        .fitSize([this.width, this.height], this.states);

      // geopath generator function to transform geojson into SVG path
      const path = d3.geoPath(projection);

      // map geojson into bound data to SVG
      return this.states.features.map((feature, index) => {
        return {
          path: path(feature),
          data: feature,
          index
        };
      });
    }
  },
  methods: {
    createMap() {
      console.log("Map Created");
    },
    updateMap() {
      // this is where logic to update the map would go - for filtering data, transforming, or updating with new data.
      console.log("Map Updated");
    },
    resizeMap() {
      // this is where resizing logic would happen, hooked into window event listeners.
      console.log("Map Resized");
    }
  }
};
</script>

<style lang="scss" scoped>
#map {
  border: 1px solid red;
  height: 300px;
  width: 100%;
}

.background {
  fill: #f0f0f0;
  stroke: black;
  stroke-width: 1px;
}

.state {
  fill: #525252;
  stroke: white;
  stroke-width: 0.5px;
}
</style>
