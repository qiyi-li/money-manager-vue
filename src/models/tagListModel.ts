const localStorageKeyName = 'tagList';
type TagListModel = {
  data: string[];
  fetch: () => string[];
create: (name: string) => 'success' | 'duplicated'; // 联合类型
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
    if(this.data.indexOf(name)>=0){
      return 'duplicated'
    }
    this.data.push(name);
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};
export default tagListModel;