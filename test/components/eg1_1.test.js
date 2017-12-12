import Vue from 'vue'
import Test2 from '../../components/Example/eg1/test2.vue'

describe('简单测试一个组件的属性', () => {
    let cmp, vm

      //beforeEach 作用？beforeEach在每次测试之前创建一个干净的组件的非常干净的方法，这在单元测试中非常重要，因为它定义了测试不应该相互依赖。
      beforeEach(() => {
        cmp = Vue.extend(Test2) // Create a copy of the original component
        vm = new cmp({
          data: { // Replace data value with this fake data
            messages: ['Cat']
          }
        }).$mount() // Instances and mounts the component
      })

      it('messages 等于 ["Cat"]', () => {
        expect(vm.messages).toEqual(['Cat'])
      })

})