<template>
  <button @click="handleSubmit(data)">Add Result</button>
</template>

<script>
export default {
  props: {
    result: {
      type: Object
    }
  },
  methods: {
    handleSubmit(input) {
      this.$store.dispatch("addResult", input);
    }
  }
};
</script>

<style lang="scss" scoped></style>
