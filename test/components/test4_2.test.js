import { mount } from 'vue-test-utils'
import Test4 from '../../components/Example/test4.vue'
import Test3 from '../../components/Example/test3.vue'

describe('测试组件结构', () => {
    let cmp

    beforeEach(() => {
        cmp = mount(Test4, {
            propsData: {
                list: ['Cat']
            }
        })


        // let el = cmp.find('.message').find('span').element

        // let el = cmp.find('.message span').element

    })

    it('这是一个test4组件', () => {
        // Test4是name
        expect(cmp.is(Test4)).toBe(true)

        // Or with CSS selector
        expect(cmp.is('ul')).toBe(true)
    })

    it('测试是否包含test3组件', () => {
        expect(cmp.contains(Test3)).toBe(true)

        // Or with CSS selector
        expect(cmp.contains('.test3')).toBe(true)
    })

    it('test4和test3都是vue实例', () => {
        expect(cmp.isVueInstance()).toBe(true)
        expect(cmp.find(Test3).isVueInstance()).toBe(true)
    })


    it('Test3组件是否存在', () => {
        expect(cmp.find('.test3').exists()).toBe(true)
    })

    it('Test3组件是否为空', () => {
        expect(cmp.find(Test3).isEmpty()).toBe(false)
    })



    //样式测试似乎有问题。。。

    // it('Test3组件是否包含class为test3的组件', () => {
    //     // console.log(cmp.find(Test3).getAttribute('class'))
    //     expect(cmp.find(Test3).hasAttribute('class', 'test3')).toBe(true)
    // })

    // it('Test3组件是否包含class为test3的组件', () => {
    //     expect(cmp.find(Test3).hasClass('test3')).toBe(true)
    // })
})