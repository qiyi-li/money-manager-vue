type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number; // 数据类型 object | string | number | undefined | boor | null | symbol
  createdAt: Date | undefined;  //类 -- 构造函数
  //createAt?: Date  同上

}