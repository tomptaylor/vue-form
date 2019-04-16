<template>
  <div>
    <form @submit.prevent="addItem">
      <label>Start Time</label>
      <input type="time" v-model="schedule.start">
      <label>End Time</label>
      <input type="time" v-model="schedule.end">
      <button type="submit">Add</button>
    </form>
    {{schedule.start}}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      schedule: {
        start: "",
        end: ""
      }
    };
  },
  methods: {
    addItem() {
      console.log(this.schedule.start);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
