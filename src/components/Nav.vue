<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics" class="statistics"/>
      统计

    </router-link>
  </nav>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style scoped lang="scss">  //scoped 表示 .nav 只会影响 当前template 里面 添加了 .nav 属性的元素
@import "~@/assets/style/helper.scss";
nav {
  @extend %outerShadow;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .icon {
      width: 30px;
      height: 30px;
    }
  };
  >.item.selected{
    color: $color-highlight;
    font-size: 14px;
  }
}
</style>