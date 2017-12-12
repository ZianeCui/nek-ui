import Vue from 'vue'
import { KLMessage } from '../../src/index'
import { shallow } from 'vue-test-utils'


describe('KLMessage.test.js', () => {
    let cmp, vm
    let test2

    beforeEach(() => {
        cmp = Vue.extend(KLMessage) // Create a copy of the original component
        vm = new cmp({
            data: { // Replace data value with this fake data
                messages: ['a', 'b', 'c']
            }
        }).$mount() // Instances and mounts the component

    })

    it('equals messages to ["a", "b", "c"]', () => {
        expect(vm.messages).toEqual(['a', 'b', 'c'])
    })

    it('has the expected html structure1', () => {
        expect(vm.$el).toMatchSnapshot()
    })

})