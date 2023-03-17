<script setup lang="ts">
import cssClasses from "@/config/css-classes";

withDefaults(
  defineProps<{
    modelValue?: string;
    type?: 'text' | 'email' | 'password',
  }>(),
  {
    type: 'text',
  }
);
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const onInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;

  console.log('onInput', value);

  emit('update:modelValue', value);
}
</script>

<template>
  <div>
    <label for="email" :class="cssClasses.form.label">Email</label>
      <input
        :type="type"
        :value="modelValue"
        name="email"
        id="email"
        :class="cssClasses.form.input.text"
        placeholder="you@example.com"
        @input="onInput"
      />
  </div>
</template>
