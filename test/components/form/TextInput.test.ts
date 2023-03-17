import { mount } from "@vue/test-utils";
import TextInput from "@/components/form/TextInput.vue";
import { expect, test } from "vitest";

test("can mount", () => {
  const wrapper = mount(TextInput);

  expect(wrapper.exists()).toBe(true);
});

test("works with v-model", () => {
  const wrapper = mount(TextInput, {
    props: {
      modelValue: "foo",
    }
  });

  expect(wrapper.find('input').element.value).toBe("foo");
  expect(wrapper.props('modelValue')).toBe("foo");

  wrapper.find('input').setValue("bar");

  const emitted = wrapper.emitted('update:modelValue');

  expect(emitted).toBeDefined();
  expect(emitted).toHaveLength(1);
  // @ts-ignore-next-line
  expect(emitted[0][0]).toBe("bar");
});
