<template>

  <div class="app">
    <navbar/>
    <auth-dialog/>
  </div>

  <RouterView />
</template>
<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import AuthDialog from "./components/AuthDialog.vue";

</script>
<style scoped lang="scss">
.app{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
