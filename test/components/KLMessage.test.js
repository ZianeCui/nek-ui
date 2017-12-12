import Vue from 'vue'
import { KLMessage } from '../../src/index'
import { shallow, mount } from 'vue-test-utils'

import KLMessageItem from '../../components/KLMessage/src/message-item.vue'


describe('KLMessage.test.js', () => {
    let cmp, vm
    let test2

    beforeEach(() => {
        cmp = shallow(KLMessage, {
            data: {
                messages: ['a', 'b', 'c']
            }
        })
    })

    it('equals messages to ["a", "b", "c"]', () => {
        expect(cmp.vm.messages).toEqual(['a', 'b', 'c'])
    })

    it('has the expected html structure1', () => {
        expect(cmp.vm.$el).toMatchSnapshot()
    })




    let cmp2 = mount(KLMessage)

    it('contains a MessageItem component', () => {
        expect(cmp2.contains(KLMessageItem)).toBe(true)
    })


    it('Calls handleMessageClick when @message-click happens', () => {
        const stub = jest.fn()
        cmp2.setMethods({ handleMessageClick: stub })
        cmp2.update()

        const el = cmp2.find(KLMessageItem).vm.$emit('message-clicked', 'cat')
        expect(stub).toBeCalledWith('cat')
      })



})