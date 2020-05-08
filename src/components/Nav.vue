<template>
  <div class="nav">
    <router-link to="/money">
      记账
      <Icon name="money"/>
    </router-link>
    |
    <router-link to="/labels">
      标签
      <Icon name="label"/>
    </router-link>
    |
    <router-link to="/statistics">
      统计
      <Icon name="statistics"/>
    </router-link>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style scoped lang="scss">  //scoped 表示 .nav 只会影响 当前template 里面 添加了 .nav 属性的元素
  .nav{
    border: 1px solid salmon;}
</style>