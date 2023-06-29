<template>
  <nav>
    <div class="logo">
      <img src="/assets/logo.png" alt="logo">
      <span>HushShare</span>
    </div>
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
  justify-content: space-between;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 44px;
    }

    span {
      font-size: 2rem;
      font-family: "Lato" cursive;
    }
  }


  // .submit-new-confession {
  //   display: none;

  //   @media (max-width: 800px) {
  //     display: block;
  //   }
  // }
}

* {
  color: white;
}
</style>