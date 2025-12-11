<script setup >
import Header from './components/Header.vue'
import Hero from  "./view/Hero.vue"
import featuresDishes from './components/features/featuresDishes.vue';
import fullMenu from './view/fullMenu.vue'
import About from './view/About.vue'
import findUs from './view/findUs.vue'
import openingHours from './view/openingHours.vue'
</script>

<template>
    <Header/>
     <Hero/>
  <featuresDishes />
  <fullMenu/>
  <About/>
  <findUs/>
  <openingHours/>
</template>

<style scoped>

</style>
