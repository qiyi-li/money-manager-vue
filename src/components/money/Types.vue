<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Types'
  };
</script>

<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";

  .types {
    background: rgb(241, 244, 245);
    display: flex;
    text-align: center;
    font-size: 24px;

    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: $color-highlight;

      }

      &.selected {
        color: $color-highlight;
      }

    }
  }
</style>