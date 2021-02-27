import { createLocalVue, shallowMount } from "@vue/test-utils";
import switchInput from "../../src/components/switchInput";
import vuetify from "vuetify";

describe("switchInput.vue", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(vuetify);

    wrapper = shallowMount(switchInput, {
      localVue,
    });
  });
  it("renders a vue instance", () => {
    expect(shallowMount(switchInput).isVueInstance()).toBe(true);
  });

  it("has an template", () => {
    expect(wrapper.contains("div")).toBe(true);
  });

  it("has this component", () => {
    expect(wrapper.findComponent(switchInput).exists()).toBe(true);
  });
});
