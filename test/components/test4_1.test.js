import { mount } from 'vue-test-utils'
import Test4 from '../../components/Example/test4.vue'

describe('使用mount测试组件', () => {
    let cmp

    beforeEach(() => {
        cmp = mount(Test4, {
            // `propsData` ??
            propsData: {
                list: ['Cat']
            }
        })
    })

    it('has received ["Cat"] as the message property', () => {
        expect(cmp.vm.list).toEqual(['Cat'])
    })

    it('has the expected html structure', () => {
        expect(cmp.element).toMatchSnapshot()
    })
})