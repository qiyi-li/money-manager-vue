type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number; // 数据类型 object | string | number | undefined | boor | null | symbol
  createdAt: Date | undefined;  //类 -- 构造函数
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
interface Window{
  tagList: Tag[];
  findTag: (id: string) => Tag | undefined;
  createTag: (name: string) => void;
  removeTag: (id: string) => boolean;
  updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated' | 'null';
//updateTag: TagListModel['update']
}