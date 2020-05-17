const localStorageKeyName = 'tagList';
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated' | 'null'; // 联合类型
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated' | 'null';
  remove: (id: string) => boolean;
  save: () => void; //void 表示 空
}
const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    //在后面定义上 返回值的类型
    return this.data;
  },
  create(name) {
    //this.data=[{id:'1',name:'1'},{id:'2',name:'2'}]
    const names = this.data.map(item => item.name);
    //去除首尾空格
    const realNameList = names.map(item => item.replace(/(^\s*)|(\s*$)/g, ''));
    const realName=name.replace(/(^\s*)|(\s*$)/g, '')
    if (realNameList.indexOf(realName) >= 0) {
      return 'duplicated';
    }
    if (realName.length === 0) {
      return 'null';
    }
    this.data.push({id: realName, name: realName});
    console.log(this.data);
    this.save();
    return 'success';
  },
  update(id, name) {
    const idList = this.data.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name);
      const trueName = name.replace(/(^\s*)|(\s*$)/g, '');
      if (name.length === 0) {
        return 'null';
      } else if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.name = trueName;
        this.save();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  remove(id: string) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    this.data.splice(index, 1);
    this.save();
    return true;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};
export default tagListModel;