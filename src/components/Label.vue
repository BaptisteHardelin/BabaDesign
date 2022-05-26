<template>
  <div class="hello">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Label",
  props: {
    msg: String,
  },
};
</script>
