import { shallow } from 'vue-test-utils'
import Form from '../../components/Example/eg4/form.vue'

describe('Form.test.js', () => {
    let cmp

    beforeEach(() => {
        cmp = shallow(Form)
    })


    describe('Properties', () => {
        it('测试reversed属性如果不是true, 值应该相等', () => {
            cmp.vm.inputValue = 'Yoo'
            expect(cmp.vm.reversedInput).toBe('Yoo')
        })

        it('测试reversed属性是true, 值应该是ooY', () => {
            cmp.vm.inputValue = 'Yoo'
            cmp.setProps({ reversed: true })
            expect(cmp.vm.reversedInput).toBe('ooY')
        })
    })

    describe('Watchers - inputValue', () => {
        let spy

        beforeAll(() => {
            spy = jest.spyOn(console, 'log')
        })

        afterEach(() => {
            spy.mockClear()
        })

        it('is not called if value is empty (trimmed)', next => {
            cmp.vm.inputValue = '   '
            cmp.vm.$nextTick(() => {
                expect(spy).not.toBeCalled()
                next()
            })
        })

        it('is not called if values are the same', next => {
            cmp = shallow(Form, { data: ({ inputValue: 'foo' }) })
            cmp.vm.inputValue = 'foo'

            cmp.vm.$nextTick(() => {
                expect(spy).not.toBeCalled()
                next()
            })
        })

        it('is called with the new value in other cases', next => {
            cmp.vm.inputValue = 'foo'
            cmp.vm.$nextTick(() => {
                expect(spy).toBeCalled()
                next()
            })
        })



    })


})