<template>
  <div class="appBody">
    <header class="fixed-top">
      <Navbar></Navbar>
    </header>
    <div class="container h-100 w-100 mt-5 pt-4 pb-4">
      <RouterView />
    </div>

    <a
      class="creator position-fixed bottom-0 end-0 btn btn-light p-0 ps-1 pe-1 rounded-start-2 rounded-end-0 fw-light text-decoration-none fst-italic text-dark"
      href="https://github.com/MDMUHIR"
      >© MDMUHIR</a
    >
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>

<style scoped></style>
