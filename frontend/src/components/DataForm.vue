<template>
  <form @submit.prevent="handleSubmit()">
    <div>
      <label for="state">State:</label>
      <input v-model="state" type="text" id="state" name="state" />
    </div>
    <div>
      <label for="candidate">Candidate:</label>
      <input v-model="candidate" type="text" id="candidate" name="candidate" />
    </div>
    <div>
      <label for="votes">Votes:</label>
      <input v-model="votes" type="number" id="votes" name="votes" />
    </div>
    <Button>Submit</Button>
  </form>
</template>

<script>
export default {
  data() {
    // start with empty object
    return {
      state: "",
      candidate: "",
      votes: ""
    };
  },
  methods: {
    handleSubmit() {
      const result = {
        state: this.state,
        candidate: this.candidate,
        votes: this.votes,
        timestamp: Date.now()
      };

      console.log("submitted result data: ", result);
      // reset form values
      (this.state = null), (this.candidate = null), (this.votes = null);

      this.$store.dispatch("addResult", result);
    }
  }
};
</script>

<style lang="scss" scoped></style>
