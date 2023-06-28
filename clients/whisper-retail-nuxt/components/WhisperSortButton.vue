<template>
  <div>
    <button :class="{ active: isActive }">{{ label }}</button>
  </div>
</template>

<script setup lang="ts">
const { label, isActive } = defineProps(['label', 'isActive'])


</script>

<style lang="scss" scoped>
button {
  padding: 1rem 1.5rem;
  // background-color: rgb(32, 31, 35);
  background-color: transparent;
  outline: solid 1px rgb(226, 226, 226);
  color: white;
  border: none;
  border-radius: 12px;
  transition: background-color ease-in 100ms;

  &:hover {
    background-color: rgb(71, 69, 77);
    cursor: pointer;
  }

  &:active {
    background-color: rgb(32, 31, 35);
  }
}

.active {
  color: black;
  background-color: rgb(226, 226, 226);
  outline: solid 1px transparent;
  cursor: default !important;
}
</style>