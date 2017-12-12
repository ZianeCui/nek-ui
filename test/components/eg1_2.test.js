import Vue from 'vue'
import Test2 from '../../components/Example/eg1/test2.vue'

describe('快照测试', () => {
    let cmp, vm

    beforeEach(() => {
        cmp = Vue.extend(Test2) // Create a copy of the original component
        vm = new cmp({
            data: { // Replace data value with this fake data
                messages: ['Cat']
            }
        }).$mount() // Instances and mounts the component
    })


    it('Test2可以得到期望的html结构', () => {
        expect(vm.$el).toMatchSnapshot()
    })

    //   缺点？

})