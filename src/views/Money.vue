<template>
  <Layout class-prefix="layout">
    {{recordList}}
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTag"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/money/NumberPad.vue';
  import Types from '@/components/money/Types.vue';
  import Notes from '@/components/money/Notes.vue';
  import Tags from '@/components/money/Tags.vue';
  import {Component, Watch} from 'vue-property-decorator';


  //TS 的类型声明
  type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: number; // 数据类型 object | string | number | undefined | boor | null | symbol
    createdAt: Date | undefined;  //类 -- 构造函数
    //createAt?: Date  同上

  }
  const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
  @Component({
    components: {Tags, Notes, Types, NumberPad},
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行'];

    recordList: Record[] = recordList;

    record: Record = {
      tags: [], notes: '', type: '-', amount: 0, createdAt: undefined
    };


    onUpdateTag(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateAmount(value: number) {
      this.record.amount = value;
    }

    saveRecord() {
      const record2: Record = JSON.parse(JSON.stringify(this.record));
      record2.createdAt = new Date();
      this.recordList.push(record2);
    }

    @Watch('recordList')
    onReactListChange(){
      window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
    }
  }
</script>

<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>
