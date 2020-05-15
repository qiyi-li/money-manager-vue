const localStorageKeyName = 'tagList';
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated' | 'null'; // 联合类型
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
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
  }
};
export default tagListModel;