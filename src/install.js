import Label from "./components/Label.vue";

const LabelDesign = {
  install(Vue) {
    // eslint-disable-next-line vue/multi-word-component-names
    Vue.component("label", Label);
  },
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(LabelDesign);
}

export default LabelDesign;
