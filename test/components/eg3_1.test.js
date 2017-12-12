import { mount } from 'vue-test-utils'
import List from '../../components/Example/eg3/List.vue'
import ListItem from '../../components/Example/eg3/ListItem.vue'

describe('测试List', () => {
    let cmp

    describe('属性', () => {

        const createCmp = propsData => mount(List, { propsData })
        const createItemCmp = propsData => mount(ListItem, { propsData })

        // 测试List
        it('赋值后，包含item属性并且值为value', () => {
            cmp = createCmp({ item: 'value' })
            expect(cmp.hasProp('item', 'value')).toBeTruthy()
        })

        // it('包含item属性', () => {
        //     cmp = createCmp()
        //     expect(cmp.hasProp('item')).toBeTruthy()
        // })

        // it('没有赋值, 包含item属性并且值不为value', () => {
        //     cmp = createCmp()
        //     expect(cmp.hasProp('item', 'value')).toBeFalsy()
        // })

        // it('包含cat属性', () => {
        //     const wrapper = mount(ListItem)
        //     expect(wrapper.hasProp('bar')).toBeFalsy()
        // })

        // it('包含cat属性', () => {
        //     cmp = createCmp({ cat: 'hey' })
        //     expect(cmp.hasProp('cat', 'hey')).toBeFalsy()
        // })

        // it('Paco 是属性name 的默认值？', () => {
        //     cmp = createCmp()
        //     expect(cmp.hasProp('name', 'Paco')).toBeTruthy()
        // })


        // it('测试item验证规则', () => {
        //     let spy = jest.fn(console, 'error')
        //     cmp = createCmp({ item: 1 })
        //     expect(spy).toBeCalledWith(expect.stringContaining('[Vue warn]: Invalid prop'))

        //     spy.mockReset()
        // })

    })
})