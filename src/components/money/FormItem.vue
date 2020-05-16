<template>
  <div>
    <label class="formItem">
      <span class="name">{{this.filedName}}</span>
      <input type="text"
             v-model="value"
             :placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue {
    @Prop({default: ''}) value!: string;

    @Prop({required: true}) filedName!: string;
    @Prop() placeholder?: string;

    @Watch('value')
    onValueChanged(value: string) {
      //(value: string, oldValue: string)
      this.$emit('update:value', value);
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";

  .formItem {
    font-size: 14px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    background: white;
    .name {
      padding-right: 16px;
    }

    input {
      height: 40px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>