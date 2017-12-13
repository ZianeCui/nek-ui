import { mount } from 'vue-test-utils'
import List from '../../components/Example/eg2/List.vue'
import ListItem from '../../components/Example/eg2/ListItem.vue'

describe('测试组件结构', () => {
    let cmp

    beforeEach(() => {
        cmp = mount(List, {
            propsData: {
                list: ['Cat']
            }
        })


        // let el = cmp.find('.message').find('span').element

        // let el = cmp.find('.message span').element

    })

    it('这是一个List组件', () => {
        // List是name
        expect(cmp.is(List)).toBe(true)

        // Or with CSS selector
        expect(cmp.is('ul')).toBe(true)
    })

    it('测试是否包含ListItem组件', () => {
        expect(cmp.contains(ListItem)).toBe(true)

        // Or with CSS selector
        expect(cmp.contains('.list-item')).toBe(true)
    })

    it('List和ListItem都是vue实例', () => {
        expect(cmp.isVueInstance()).toBe(true)
        expect(cmp.find(ListItem).isVueInstance()).toBe(true)
    })


    it('ListItem组件是否存在', () => {
        expect(cmp.find('.list-item').exists()).toBe(true)
    })

    it('ListItem组件是否为空', () => {
        expect(cmp.find(ListItem).isEmpty()).toBe(false)
    })



    //样式测试似乎有问题。。。

    // it('ListItem组件是否包含class为ListItem的组件', () => {
    //     // console.log(cmp.find(ListItem).getAttribute('class'))
    //     expect(cmp.find(ListItem).hasAttribute('class', 'ListItem')).toBe(true)
    // })

    // it('ListItem组件是否包含class为ListItem的组件', () => {
    //     expect(cmp.find(ListItem).hasClass('ListItem')).toBe(true)
    // })
})