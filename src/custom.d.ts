/*import Vue from'vue'

declare module 'vue/types/vue'{
  interface vue{
    $store2:any
  }
}*/

type RootState={
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
  alterTag?: Tag;
}

type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number; // 数据类型 object | string | number | undefined | boor | null | symbol
  createdAt: string | undefined;  //类 -- 构造函数
  //createAt?: Date  同上
}

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
/*
interface Window{
}
*/
