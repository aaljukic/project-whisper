<template>
  <button :disabled="isDisabled" @click="() => click">
    <Icon class="icon" :name=icon />
    {{ label }}
  </button>
</template>

<script setup lang="ts">

const props = defineProps({
  label: String,
  icon: String,
  click: Function,
  isDisabled: Boolean
});

const { label, click, icon, isDisabled } = props;


</script>

<style lang="scss" scoped>
button {
  padding: 1rem 1.5rem;
  background-color: hsl(255, 57%, 37%);
  color: white;
  border: none;
  border-radius: 12px;
  transition: background-color ease-in 100ms;
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  align-items: center;

  .icon {
    height: 24px;
    width: 24px;
  }

  &:hover {
    background-color: hsl(255, 48%, 52%);
    cursor: pointer;
  }

  &:active {
    background-color: hsl(255, 57%, 37%);
  }

  &:disabled {
    background-color: hsl(258, 8%, 25%);
  }
}
</style>