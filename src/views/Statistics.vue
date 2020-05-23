<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>

    <ol>
      <li v-for="group in result" :key="group.title">
        <h3 class="title">{{beautify(group.title)}}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{tagString(item.tags)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>￥{{item.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>

  </Layout>
</template>
<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import intervalList from '@/constants/intervalList';
  import recordTypeList from '@/constants/recordTypeList';
  import dayjs from 'dayjs';

  @Component({
    components: {Tabs},
  })
  export default class Statistics extends Vue {
    tagString(tags: Tag[]) {
      return tags.length === 0 ? '无' : tags.join(',');
    }

    beautify(string: string) {
      const now = dayjs();
      const day = dayjs(string);
      if (day.isSame(now, 'day')) {
        return '今天';
      } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
        return '昨天';
      } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
        return '前天';
      } else if (day.isSame(now, 'year')) {
        return day.format('M月D日');
      } else {
        return day.format('YYYY年M月D日');
      }
    }

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

  %item {
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .title {
    background-color: #d9d9d9;
    @extend %item
  }

  .record {
    background-color: #fff;
    @extend %item
  }

  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
</style>
