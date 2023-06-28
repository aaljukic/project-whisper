<template>
  <div class="confession-details-page">
    <WhisperConfessionCard :confession="confessionDetails" isDetails />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const nuxt = useNuxtApp();
const confessionDetails: Ref = ref(null);

console.log(route.params);

const { data } = await useFetch(`/api/confessions/${route.params.id}`, {
  method: "GET",
  params: {
    itemId: route.params.id,
  }
});
confessionDetails.value = toRaw(data.value);

</script>

<style lang="scss" scoped>
  .confession-details-page {
    align-items: center;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-snap-align: start;
    height: 100%;
    align-self: stretch;
    text-align: -webkit-center;
  }

</style>
