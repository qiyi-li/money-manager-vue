<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <div class="line"></div>
      <FormItem filed-name="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"/>
    </div>
    <!--    <Tags :data-source.sync="tags" @update:value="onUpdateTag"/>-->
    <Tags />
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/money/NumberPad.vue';
  import Types from '@/components/money/Types.vue';
  import FormItem from '@/components/money/FormItem.vue';
  import Tags from '@/components/money/Tags.vue';
  import {Component} from 'vue-property-decorator';

  //TS 的类型声明
  @Component({
    components: {Tags, FormItem, Types, NumberPad},
  })
  export default class Money extends Vue {
    get recordList() {
      return this.$store.state.recordList;
    }

    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0, createdAt: undefined
    };

    created() {
      this.$store.commit('fetchRecords');
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateAmount(value: number) {
      this.record.amount = value;
    }
    saveRecord() {
      this.$store.commit('createRecord',this.record)
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }

  .notes {
    padding: 12px 0;
    background: #fff;
    position: relative;
    >.line{
      position: absolute;
      top: 0;
      height: 1px;
      width: 90%;
      background-color: #e6e6e6;
      left: 50%;
      transform:translate(-50%);
    }
  }
</style>
