# nek-ui
2017年08月13日 开始开发

目前这个结构开始开发组件是没有问题的。

需要完善的地方：
- 开发环境的完善
- 样式的打包问题
- 测试
- 文档如何实现
- 自动部署

## 开发注意事项：
- 还没想好怎么整理文档，所以暂时开发的时候组件的demo文件先存放在temp文件夹下面；
- props一定要指定验证规格 如下
```
Vue.component('example', {
  props: {
    // 基础类型检测 (`null` 意思是任何类型都可以)
    propA: Number,
    // 多种类型
    propB: [String, Number],
    // 必传且是字符串
    propC: {
      type: String,
      required: true
    },
    // 数字，有默认值
    propD: {
      type: Number,
      default: 100
    },
    // 数组/对象的默认值应当由一个工厂函数返回
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  }
})
```
type 可以是下面原生构造器：
String
Number
Boolean
Function
Object
Array
Symbol


card组件
栅格布局组件
按钮
复选框
单选框
日期选择组件
输入框
下拉选择
textarea
上传组件
modal组件
notify组件
菜单
分页
面包屑
选项卡
tooltip文字提示


node版本：6.10.2

移步：https://github.com/yeomanyang/nek-vue develop
