<template>
  <div>
    <theform/>
    <thegrid/>
  </div>
</template>

<script>
import { bus } from "./../main";
import theform from "./theform";
import thegrid from "./thegrid";

export default {
  components: {
    theform,
    thegrid
  }
};
</script>

<style>
</style>
