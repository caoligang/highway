<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import hometest from '@/views/homtest.vue'

</script>

<template>

<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--        <RouterLink to="/hometest">hometest</RouterLink>-->
<!--      </nav>-->


  <RouterView />


</template>

<style scoped>
@import "./assets/css/base.css";
@import "./assets/css/home.css";
</style>