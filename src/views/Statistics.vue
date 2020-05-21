<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      type:{{type}}
      <br>
      interval:{{interval}}
    </div>
    <div>
      <ol>
        <li v-for="(group,index) in result" :key="index">
          <h3>{{group.title}}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.id">
              {{item.amount}}
              {{item.createdAt}}
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import intervalList from '@/constants/intervalList';
  import recordTypeList from '@/constants/recordTypeList';

  @Component({
    components: {Tabs},
  })
  export default class Statistics extends Vue {
    get recordList() {
      return (this.$store.state.recordList as RecordItem[]);
    }

    get result() {
      const {recordList} = this;
      type HashTableValue = { title: string; items: RecordItem[] }
      const hashTable: { [key: string]: HashTableValue } = {};
      for (let i = 0; i < recordList.length; i++) {
        const [data, time] = recordList[i].createdAt!.split('T');
        hashTable[data] = hashTable[data] || {title: data, items: []};
        hashTable[data].items.push(recordList[i]);
      }
      return hashTable;
    }

    beforeCreate() {
      this.$store.commit('fetchRecords');
    }

    type = '-';
    interval = 'day';
    intervalList = intervalList;
    recordTypeList = recordTypeList;

  }
</script>

<style scoped lang="scss">
  ::v-deep {

    .type-tabs-item {
      background-color: #d9d9d9;

      &.selected {
        background-color: rgb(247, 247, 247);

        & > .underline {
          width: 0;
        }
      }
    }

    .interval-tabs-item {
      height: 48px;
    }
  }
</style>