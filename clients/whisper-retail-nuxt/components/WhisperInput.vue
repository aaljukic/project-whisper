<template>
  <div class="whisper-input">
    <label :for=id>{{ label }}:</label>
    <textarea v-if="isTextArea" :name=label :id=id cols="30" rows="10" v-model="inputValue" />
    <input v-else :id=id type="text" v-model="inputValue" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';


const props = defineProps({
  label: String,
  id: String,
  isTextArea: Boolean,
});

const { label, id, isTextArea } = props;
const inputValue = ref('');
const emit = defineEmits(['update:modelValue']);

watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue);
});

</script>

<style lang="scss" scoped>
.whisper-input {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  label {
    color: hsl(0, 0%, 89%);
    font-size: 1rem;

  }

  input {
    padding: 1rem;
    background-color: rgb(117, 116, 128);
    border-radius: 12px;
    // outline: none; // ux better with it - a11y todo: customize
    border: none;
    color: hsl(0, 0%, 89%);
    font-size: 1rem;

  }

  textarea {
    resize: none;
    padding: 1rem;
    background-color: rgb(117, 116, 128);
    border-radius: 12px;
    color: hsl(0, 0%, 89%);
    font-size: 1rem;
  }
}
</style>