<template>
  <div id="app">
    <Label :msg="msg" />
  </div>
</template>

<script>
import Label from "./components/Label.vue";

export default {
  name: "App",
  components: {
    Label,
  },
  data() {
    return {
      msg: "Hello world",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
