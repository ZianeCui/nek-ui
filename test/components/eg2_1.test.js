import { mount } from 'vue-test-utils'
import List from '../../components/Example/eg2/List.vue'

describe('使用mount测试组件', () => {
    let cmp

    beforeEach(() => {
        cmp = mount(List, {
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