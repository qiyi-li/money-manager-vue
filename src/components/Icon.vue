<template>
    <svg class="icon" @click="$emit('click',$event)">
      <use :xlink:href="'#'+name"/>
<!--  <use v-bind:xlink:href="'#'+name"/>  -->
    </svg>
</template>

<script lang="ts">
  //将一个目录内的 同一后缀文件，全部引入到当前文件
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {
    importAll(require.context('../assets/icons', true, /\.svg$/));
  } catch (error) {
    console.log(error);
  }

  export default {
    props:['name'],
    name: 'Icon'
  };
</script>

<style scoped lang="scss">
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>