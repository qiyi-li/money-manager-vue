<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList"
          :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">
        {{tag.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';


  @Component({
    computed: {
      tagList() {
        return this.$store.state.tagList;
      }
    }
  })
  export default class Tags extends Vue {
    selectedTags: string[] = [];

    created(){
      this.$store.commit('fetchTags')
    }

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        console.log('hhh');
        this.selectedTags.splice(index, 1);
      } else {
        console.log('hhh');
        this.selectedTags.push(tag);
        console.log(this.selectedTags);
      }
      this.$emit('update:value', this.selectedTags);
    }

    create() {


      const name = window.prompt('请输入标签名');
      if (!name) {
        return window.alert('标签不能为空')
      }
      this.$store.commit('createTag',name)
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";

  .tags {
    font-size: 14px;
    background: white;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;

    > .current {
      display: flex;
      flex-wrap: wrap;
      overflow: auto;

      > li {
        $bg: #d9d9d9;
        background: $bg;
        height: 24px;
        line-height: 24px;
        border-radius: 12px;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;

        &.selected {
          background: lighten($bg, 11%);
          color: $color-highlight;
        }
      }
    }

    > .new {
      padding-top: 16px;

      button {
        background: transparent;
        border: none;
        color: #999;
        padding: 0 3px;;
      }
    }

  }
</style>