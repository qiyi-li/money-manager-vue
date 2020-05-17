<template>
  <layout>
    <div class="navBar">
      <Icon class="leftIcon"  name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <Icon class="rightIcon"  name="提交" @click="update"/>
    </div>
    <div class="form-wrapper">
      <FormItem :value="tag.name"
                filed-name="标签名"
                @update:value="update($event)"
                placeholder="请输入标签名"/>
    </div>
    <div class="button">
      <Button @click="remove">删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  import FormItem from '@/components/money/FormItem.vue';
  import Button from '@/components/Button.vue';
  @Component({
    components: {Button, FormItem}
  })
  export default class EditLabel extends Vue {
    tag?: { id: string; name: string } = undefined;
    namePart: string | undefined;
    created() {
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(t => t.id === id)[0];
      if (tag) {
        this.tag = tag;
        console.log(this.tag);
      } else {
        this.$router.replace('/404'); //使用 replace ，以防止跳转 404 不能回退
      }
    }
    update(name: string) {
      if (this.tag) {
        tagListModel.update(this.tag.id, name);
      }
    }

    remove() {
      if (this.tag) {
        tagListModel.remove(this.tag.id);
      }
    }
    goBack(){
      this.$router.back()
    }
  }
</script>

<style scoped lang="scss">
  .navBar {
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background-color: white;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .title {
    }
    > .leftIcon {
      width: 18px;
      height: 18px;
    }
    > .rightIcon {
      height: 18px;
      width: 18px;
    }
    button {
      background-color: inherit;
      border: none;
    }
  }
  .form-wrapper{
    margin-top: 8px;
  }
  .button{
    display: flex;
    align-items:center;
    justify-content: space-around;
    margin-top: 44px;
  }
</style>