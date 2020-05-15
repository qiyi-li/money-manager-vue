const localStorageKeyName = 'recordList';
const recordListModel = {
  colon(data: RecordItem[] | RecordItem){
    return JSON.parse(JSON.stringify(data))
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    //在后面定义上 返回值的类型
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};
export default recordListModel