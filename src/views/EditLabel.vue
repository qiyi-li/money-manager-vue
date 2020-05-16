<template>
  <layout>
    <div>
      <Icon name="left"/>
      <span>
        编辑标签
      </span>
      <Notes  filed-name="标签名" placeholder="请输入标签名"/>
    </div>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  import Notes from '@/components/money/Notes.vue';
  @Component({
    components: {Notes}
  })
  export default class EditLabel extends Vue {
    created() {
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(t => t.id === id)[0];
      if (tag) {
        console.log(tag);
      } else {
        this.$router.replace('/404'); //使用 replace ，以防止跳转 404 不能回退
      }

    }
  }
</script>

<style scoped lang="scss">

</style>