<template>
  <div class="layout">
    <NuxtSnackbar color="$ffffff" />
    <WhisperHeader />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
// todo: sort by location?

onBeforeMount(async () => {
  // check if anonymousUserID exists in localStorage
  let anonymousUserID: string = localStorage.getItem('anonymousUserID') ?? "";

  // if not, fetch a new one from the server
  if (!anonymousUserID) {
    try {
      await nextTick()

      const { data } = await useFetch('/api/users', {
        method: "POST",
      });

      const anonymousUserID:any = toRaw(data.value);
      localStorage.setItem('anonymousUserID', anonymousUserID.id);
    } catch (error) {
      console.error('Error fetching anonymousUserID:', error);
    }
  }
});

</script>

<style scoped lang="scss">
.layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 9fr;
  grid-column-gap: 0px;
  grid-row-gap: 3rem;
  height: 100%;
  overflow: hidden;
}
</style>