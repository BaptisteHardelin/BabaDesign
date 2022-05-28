<template>
  <div id="app">
    <Label :msg="msg" />
    <Button :label="label" />
  </div>
</template>

<script>
import Label from "./components/Label.vue";
import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    Label,
    Button,
  },
  data() {
    return {
      msg: "Hello world",
      label: "Click me",
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
