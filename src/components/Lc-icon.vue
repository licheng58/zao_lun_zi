<template>
  <svg class="svgIcon"
       :class="[className, { pointer }]">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
// import variables from "@/assets/styles/variables.scss";
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons/svg", true, /\.svg$/)); //路径写自己的
} catch (error) {
  console.log(error);
}

export default defineComponent({
  // name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    color: String,
    className: String,
    size: String,
    pointer: Boolean,
  },
  setup(props) {
    // const iconName = computed(() => `#icon-${props.name}`);
    // const iconSize = computed(() => `SIZE_${props.size?.toUpperCase()}`);
    // return {
    //   iconName,
    //   iconSize,
    //   // variables,
    // };
  },
});
</script>

<style lang="scss">
.svgIcon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  fill: var(--icon-color);
  font-size: var(--icon-size);

  &.pointer {
    cursor: pointer;
  }
}
</style>
