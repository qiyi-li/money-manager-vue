<template>
  <ul class="tabs">
    <li v-for="item in dataSource" :key="item.value"
        :class="liClass(item)"
        @click="select(item)">{{item.text}}
      <div class="underline"></div>
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  type DataSourceItem = { text: string; value: string }

  @Component
  export default class Tabs extends Vue {
    @Prop({required: true, type: Array})
    dataSource!: DataSourceItem;
    @Prop(String)
    readonly value!: string;
    @Prop(String)
    classPrefix?: string;

    liClass(item: DataSourceItem) {
      return {
        selected: item.value === this.value,
        [this.classPrefix + '-tabs-item']: this.classPrefix
      };
    }

    select(item: DataSourceItem) {
      this.$emit('update:value', item.value);
    }
  }
</script>

<style scoped lang="scss">
  .tabs {
    display: flex;
    text-align: center;
    font-size: 24px;
  }
  li {
    background-color: rgb(247,247,247);

    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

  }
  li.selected {
    color: #fd6600;
    transition: color .3s;

    .underline {
      width: 100%;
      transition: width .3s;
    }
  }

  .underline {
    background-color: #fd6600;
    margin-top: -3px;
    height: 3px;
    width: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 0;
  }


</style>