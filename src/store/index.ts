import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex); // 把 store 绑定到 vue.prototype 上面  即 vue.prototype.$store=用户传的 store

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[]
  },
  mutations: { // methods
    fetchRecords(state) {
      state.recordList=JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[]
    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
      state.recordList.push(record2); // 可选链语法
      //this.recordList && this.recordList.push(record2);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList',
        JSON.stringify(state.recordList));
    },
    fetchTags(state) {
      return state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      const realNameList = names.map(item => item.replace(/(^\s*)|(\s*$)/g, ''));
      const realName = name.replace(/(^\s*)|(\s*$)/g, '');
      if (realNameList.indexOf(realName) >= 0) {
        window.alert('标签名重复');
        return 'duplicated';
      }
      if (realName.length === 0) {
        window.alert('标签不能为空');
        return 'null';
      }
      const id = createId().toString();
      state.tagList.push({id, name: realName});
      store.commit('saveTags');
      window.alert('添加成功');
      return 'success';

    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    }
  },
});

export default store;

