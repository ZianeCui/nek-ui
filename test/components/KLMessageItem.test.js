import { shallow, mount } from 'vue-test-utils'
import KLMessageItem from '../../components/KLMessage/src/message-item.vue'
// import jest from 'jest'

describe('KLMessageItem.test.js', () => {
    let cmp

    beforeEach(() => {
        cmp = shallow(KLMessageItem, {
            // Beaware that props is overriden using `propsData`
            propsData: {
                messages: ['Cat']
            }
        })
    })

    // it('has received ["Cat"] as the message property', () => {
    //     expect(cmp.vm.messages).toEqual(['Cat'])
    // })

    it('has the expected html structure', () => {
        expect(cmp.element).toMatchSnapshot()
    })




    const createCmp = propsData => mount(KLMessageItem, { propsData })


    describe('Properties', () => {

        let cmp2;

        it('检查是否有message属性', () => {
            cmp2 = createCmp({ message: 'hey' })
            expect(cmp2.hasProp('message', 'hey')).toBeTruthy()
        })

        it('检查是否有cat属性', () => {
            cmp2 = createCmp()
            expect(cmp2.hasProp('cat', 'hey')).toBeFalsy()
        })

        it('默认作者是kaola', () => {
            cmp2 = createCmp()
            expect(cmp2.hasProp('author', 'kaola')).toBeTruthy()
        })








        describe('Validation', () => {
            const message = createCmp().vm.$options.props.message

            it('message is of type string', () => {
                expect(message.type).toBe(String)
            })

            it('message is required', () => {
                expect(message.required).toBeFalsy()
            })

            it('message has at least length 2', () => {
                expect(message.validator && message.validator('a')).toBeFalsy()
                expect(message.validator && message.validator('aa')).toBeTruthy()
            })
        })


    })



    describe('Events', () => {
        let cmp3
        beforeEach(() => {

            cmp3 = createCmp({ message: 'Cat' })

        })

        it('calls handleClick when click on message', () => {

            const stub = jest.fn()
            cmp3.setMethods({ handleClick: stub })
            cmp3.update()

            const el = cmp3.find('.message').trigger('click')
            expect(stub).toBeCalled()
        })

        it('triggers a message-clicked event when a handleClick method is called', () => {
            const stub = jest.fn()
            cmp3.vm.$on('message-clicked', stub)
            cmp3.vm.handleClick()

            expect(stub).toBeCalledWith('Cat')
        })
    })

})