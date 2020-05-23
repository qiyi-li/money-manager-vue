<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList"
          :key="tag.id"
          :class="{selected: value.map(item => item.id).indexOf(tag.id) >= 0}"
          @click="toggle(tag)">
        {{tag.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component, Prop} from 'vue-property-decorator';
  import TagHelper from '@/mixins/TagHelper';
  import {mixins} from 'vue-class-component';
  import clone from '@/lib/clone';


  @Component
  export default class Tags extends mixins(TagHelper) {
    @Prop({default: []}) readonly value!: Tag[];
    get tagList() {
      return this.$store.state.tagList
    }
    created() {
      this.$store.commit('fetchTags')
    }
    toggle(tag: Tag) {
      const tags = clone(this.value)
      const index = tags.map(item => item.id).indexOf(tag.id);
      if (index >= 0) {
        tags.splice(index, 1);
      } else {
        tags.push(tag);
      }
      this.$emit('update:value', tags)
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