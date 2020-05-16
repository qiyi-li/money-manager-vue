<template>
  <button class="button"
          @click="$emit('click',$emit)"><slot/></button>
          <!--这里的 click 触发之后向外传出 ’click‘-->
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {

  }
</script>

<style scoped lang="scss">
  .button {
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;

    &-wrapper { // 父元素的 createTag-wrapper
      text-align: center;
      padding: 16px;
      margin-top: 44-16px;
    }

  }
</style>