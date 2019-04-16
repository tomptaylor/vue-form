<template>
  <div>
    <b-table
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :items="items"
      :fields="fields"
    ></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["start", "end"],
      items: [{ start: "8:00", end: "9:00"},
      { start: "9:05", end: "10:10"},],
      striped: true,
      bordered: true,
      borderless: false,
      outlined: false,
      small: false,
      hover: true,
      dark: true,
      fixed: false,
      footClone: false
    };
  }
};
</script>
<style>
.table {
  margin: 1rem;
}
</style>
