import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';

const store = {
  count:0,
  addCount(){
    this.count+=1
  },
  //浅拷贝，即复制相关的地址过来
  ...recordStore,

  ...tagStore

};

export default store;