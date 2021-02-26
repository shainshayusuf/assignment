import { mount } from '@vue/test-utils'
import textFieldInput from "@/components/textFieldInput";

const wrapper = mount(textFieldInput)
expect(wrapper.name()).toBe('textFieldInput')