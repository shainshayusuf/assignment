import { createLocalVue, shallowMount } from "@vue/test-utils";
import autocompleteInput from "../../src/components/AutocompleteInput";
import vuetify from "vuetify";

describe("AutocompleteInput.vue", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(vuetify);

    wrapper = shallowMount(autocompleteInput, {
      localVue,
    });
  });
  it("renders a vue instance", () => {
    expect(shallowMount(autocompleteInput).isVueInstance()).toBe(true);
  });

  it("has an template", () => {
    expect(wrapper.contains("div")).toBe(true);
  });

  it("has this component", () => {
    expect(wrapper.findComponent(autocompleteInput).exists()).toBe(true);
  });
});
