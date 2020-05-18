import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // 把 store 绑定到 vue.prototype 上面  即 vue.prototype.$store=用户传的 store

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: { // methods
    increment(state,n: number) {
      state.count += n;
    }
  }
});

console.log(store.state.count);

store.commit('increment',10);
console.log(store.state.count);
export default store;

