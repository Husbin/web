export class FormJson {
  public static basedata: any = {
    name : '',                  // 子项名称
    id : '',
    hintText : '',                  // 子选项提示
    required : false,           // 是否必填
    type : '',                  // 组件类型
    optionNum : '',              // 单选选项数量
    optionValue : [],           // 单选选项值
    optionMoreNum : '',          // 复选选项数量
    optionMoreValue : [],       // 复选选项值
    numberLimit : '',            // 字数限制
    content : [],               // 存放用户填写信息
  };
}
