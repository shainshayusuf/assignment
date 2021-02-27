import { createLocalVue, shallowMount } from "@vue/test-utils";
import textFieldInput from "../../src/components/textFieldInput";
import vuetify from "vuetify";

describe("textFieldInput.vue", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(vuetify);

    wrapper = shallowMount(textFieldInput, {
      localVue,
    });
  });
  it("renders a vue instance", () => {
    expect(shallowMount(textFieldInput).isVueInstance()).toBe(true);
  });

  it("has an template", () => {
    expect(wrapper.contains("div")).toBe(true);
  });

  it("has this component", () => {
    expect(wrapper.findComponent(textFieldInput).exists()).toBe(true);
  });
});
