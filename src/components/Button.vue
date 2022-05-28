<template>
  <div>
    <button>{{ label }}</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Button",
  props: {
    label: String,
  },
};
</script>

<style>
button {
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 400 !important;
  color: #fff;
  padding: 23px 50px;
  margin: auto;
  text-align: center;
  display: inline-block !important;
  text-decoration: none;
  border: 0px;
  width: max-content;
  cursor: pointer;
  transition: all 0.3s 0s ease-in-out;
  background-color: rgb(10, 27, 216);
}

button:hover {
  transform: scale(1.04, 1);
  background-color: rgb(10, 27, 216);
  text-decoration: none;
}
</style>
