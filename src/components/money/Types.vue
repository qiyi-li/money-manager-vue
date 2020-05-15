<template>
  <div>
    <ul class="types">
      <li :class="value === '-' &&'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="value === '+' && 'selected'"
          @click="selectType('+')">收入
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

  /*export default {
    name: 'Types',
    props:['xxx'],
    data() {
      return {
        type: '-' //'-' 表示支出，'+' 表示收入
      };
    },
    methods: {
      selectType(type) {// type 只能是 '-' 和 '+' 中的一个
        if (type !== '-' && type !== '+') {
          throw new Error('type is unknown');
        }
        this.type = type;
      }
    }
  };*/
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
        @keyframes tra  {
          from{
            width: 0;
          }
          to{
            width: 100%;
          }
        }
        animation:0.3s tra ease-in-out forwards;
      }

      &.selected {
        @keyframes color  {
          from{
            color: inherit;
          }
          to{
            color: $color-highlight;
          }
        }
        animation:0.3s color ease-in-out forwards;
      }

    }
  }
</style>