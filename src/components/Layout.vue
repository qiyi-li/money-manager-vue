<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot/>
      <!-- slot 可以用来当作插槽，在引入时，将外面写好的数据插入到这个地方 -->
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Layout'
  };
</script>

<style scoped lang="scss">
  .nav-wrapper {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .content {
    flex-grow: 1;
    border: 1px solid blue;
    overflow: auto;
  }
</style>