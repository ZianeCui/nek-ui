import { mount } from 'vue-test-utils'
import { MessageList } from '../../src/index'
import { Message } from '../../src/index'


// 测试slot，原理？

describe('测试slot', () => {
    let cmp

    beforeEach(() => {
        cmp = mount(MessageList, {
            slots: {
                default: '<div class="fake-msg"></div>'
            }
        })
    })

    it('Messages are inserted in a ul.list-messages element', () => {
        const list = cmp.find('ul.list-messages')
        expect(list.findAll('.fake-msg').length).toBe(1)
    })

})

describe('Message.test.js', () => {
    let cmp

    beforeEach(() => {
        const Wrapper = {
            render(h) {
                return h(Message, { props: { message: 'test' } })
            }
        }

        cmp = mount(MessageList, {
            slots: {
                default: Message
            }
        })
    })

    it('Messages are inserted in a ul.list-messages element2', () => {
        const list = cmp.find('ul.list-messages')
        expect(list.find(Message).isVueInstance()).toBe(true)
    })

})