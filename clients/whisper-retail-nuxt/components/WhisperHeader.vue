<template>
  <nav>
    <img src="/assets/logo.png" alt="logo"><span>HushShare</span>
  </nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
nav {
  // height: 50px;
  background-color: hsl(300, 7%, 8%);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;

  img {
    width: 44px;
  }

  span {
    font-size: 2rem;
    font-family: cursive;
  }
}

* {
  color: white;
}
</style>