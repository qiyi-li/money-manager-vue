<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>Labels.vue</p>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Labels',
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