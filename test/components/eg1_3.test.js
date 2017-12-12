import { shallow } from 'vue-test-utils'
import Test2 from '../../components/Example/eg1/test2.vue'

describe('使用shallow测试组件', () => {
    let cmp

    beforeEach(() => {
        cmp = shallow(Test2, { // Create a shallow instance of the component
            data: {
                messages: ['Cat']
            }
        })
    })

    it('messages的值等于["Cat"]', () => {
        // Within cmp.vm, we can access all Vue instance methods
        expect(cmp.vm.messages).toEqual(['Cat'])
    })

    it('eg1_test2组件快照测试', () => {
        expect(cmp.element).toMatchSnapshot()
    })
})