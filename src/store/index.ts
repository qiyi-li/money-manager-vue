import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';
import router from '@/router';

Vue.use(Vuex); // 把 store 绑定到 vue.prototype 上面  即 vue.prototype.$store=用户传的 store

type RootState={
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
  alterTag?: Tag;
}
const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    alterTag: undefined,
    currentTag: undefined
  }as RootState,
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
    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    },
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      const realNameList = names.map(item => item.replace(/(^\s*)|(\s*$)/g, ''));
      const realName = name.replace(/(^\s*)|(\s*$)/g, '');
      if (realNameList.indexOf(realName) >= 0) {
        window.alert('标签名重复');
        return
      }
      if (realName.length === 0) {
        window.alert('标签不能为空');
        return
      }
      const id = createId().toString();
      state.tagList.push({id, name: realName});
      store.commit('saveTags');
      window.alert('添加成功');
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    updateTag(state, payload: { id: string; name: string }) {
      state.alterTag = payload;
    },
    submit(state) {
      if(state.alterTag){
        const {id,name}=state.alterTag
        const idList = state.tagList.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
          const names = state.tagList.map(item => item.name);
          console.log(names);
          const trueName = name.replace(/(^\s*)|(\s*$)/g, '');
          if (trueName.length === 0) {
            window.alert('输入标签为空');
            return
          } else if (names.indexOf(trueName) >= 0) {
            window.alert('输入标签重复');
            return
          } else {
            const tag = state.tagList.filter(item => item.id === id)[0];
            tag.name = trueName;
            store.commit('saveTags');
            router.back();
          }
        }
      }

    },
    removeTag(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if (index >= 0) {
        state.tagList.splice(index, 1);
        store.commit('saveTags');
        router.back();
      } else {
        window.alert('删除失败');
      }

    },
  }
});

export default store;

