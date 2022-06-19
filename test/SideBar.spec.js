import { mount } from '@vue/test-utils'
import SideBar from '@/components/SideBar.vue'

describe('SideBar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SideBar)
    expect(wrapper.vm).toBeTruthy()
  })
})
