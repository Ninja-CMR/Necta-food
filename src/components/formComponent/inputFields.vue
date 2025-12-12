<script setup lang="ts">
import { ref } from 'vue';
import { useField } from 'vee-validate';
import InputErrorMessage from './inputErrorMessage.vue';
export interface InputProps {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  minlength?: number;
  as?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  as: "input"
});

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  meta,
} = useField<string>(() => props.name, undefined, {
  syncVModel: true,
  validateOnValueUpdate: false,
});

const isFocused = ref(false);

const onBlur = (event: Event) => {
  handleBlur(event); // Signale à VeeValidate que le champ a perdu le focus
  isFocused.value = false;
};

const onFocus = () => {
  isFocused.value = true;
};
</script>

<template>
  <div class="flex flex-col mb-4 w-full">

    <label
        v-if="label"
        :for="name"
        class="block text-sm font-medium text-gray-700 mb-1"
    >
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <component
        :is="as"
        :id="name"
        v-model="inputValue"
        :type="type"
        :name="name"
        :disabled="disabled"
        :placeholder="placeholder"
        :minlength="minlength"
        :rows="as === 'textarea' ? 4 : undefined"
        :class="[
        'w-full py-3 px-4 border rounded-lg shadow-sm text-base focus:outline-none transition-colors duration-200',
        'disabled:bg-gray-100 disabled:text-gray-500',
        {
          'border-gray-300 focus:border-red-800': !errorMessage,
          'border-red-500 focus:border-red-500': errorMessage,
        },
      ]"
        @blur="onBlur"
        @focus="onFocus"
    />

    <InputErrorMessage
        v-if="errorMessage"
        :message="errorMessage"
    />
  </div>
</template>