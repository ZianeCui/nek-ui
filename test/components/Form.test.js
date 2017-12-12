import { shallow } from 'vue-test-utils'
import { Form } from '../../src/index'

describe('测试计算属性', () => {
    let cmp

    beforeEach(() => {
        cmp = shallow(Form)
    })


    describe('属性', () => {
        it('returns the string in normal order if reversed property is not true', () => {
            cmp.vm.inputValue = 'Yoo'
            expect(cmp.vm.reversedInput).toBe('Yoo')
        })

        it('returns the reversed string if reversed property is true', () => {
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