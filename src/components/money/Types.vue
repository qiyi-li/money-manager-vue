<template>
  <div>
    <ul class="types">
      <li :class="value === '-' &&'selected'"
          @click="selectType('-')">支出
        <div class="line"></div>
      </li>
      <li :class="value === '+' && 'selected'"
          @click="selectType('+')">收入
        <div class="line"></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue {
  @Prop() readonly value!: string;

    //methods
    selectType(type: string) {
      if (type !== '-' && type !== '+') {// type 只能是 '-' 和 '+' 中的一个
        throw new Error('type is unknown');
      }
      this.$emit('update:value', type);
    }
  }

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

      .line{
        background-color: $color-highlight;
        height: 3px;
        width: 0;
        position: absolute;
        left: 50%;
        transform:translate(-50%);
        bottom: 0;
      }

      &.selected {
        color: $color-highlight;
        transition:color .3s;
        .line{
          width: 100%;
          transition: width .3s;
        }
      }

    }
  }
</style>