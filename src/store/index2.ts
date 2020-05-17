import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';

const store = {
  //浅拷贝，即复制相关的地址过来
  ...recordStore,

  ...tagStore

};
console.log(store);

export default store;