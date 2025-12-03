<script setup lang="ts">
 import {useMenu} from '../composables/useMenu.ts'


 const { isOpen, toggleMenu, closeMenu } = useMenu();
</script>}

<template>
  <header>
    <div class="flex items-center justify-between px-4 md:px-10 py-4">
      <a href="#home" class="flex-shrink-0"><img src="../assets/logo.jpg" class="w-[80px] md:w-[100px]"></a>
      <nav class="hidden md:flex flex-row justify-around gap-5 bg-white p-5 font-bold">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#location">Location</a>
        <a href="#contact">Contact</a>
      </nav>
      <button class="hidden md:block bg-red-800 px-5 py-3 text-white rounded-full font-bold">Order Now</button>

      <button
          @click="toggleMenu"
          class="md:hidden flex flex-col gap-1 focus:outline-none"
      >
        <span class="w-6 h-0.5 bg-black"></span>
        <span class="w-6 h-0.5 bg-black"></span>
        <span class="w-6 h-0.5 bg-black"></span>
      </button>
    </div>
    <transition name="slide-fade">
      <div
          v-if="isOpen"
          class="md:hidden bg-white shadow-lg flex flex-col items-center gap-6 py-6"
      >
        <a href="#home" @click="closeMenu" class="text-lg font-semibold">Home</a>
        <a href="#about" @click="closeMenu" class="text-lg font-semibold">About</a>
        <a href="#location" @click="closeMenu" class="text-lg font-semibold">Location</a>
        <a href="#contact" @click="closeMenu" class="text-lg font-semibold">Contact</a>

        <button class="bg-red-800 px-5 py-3 text-white rounded-full font-bold">
          Order Now
        </button>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.35s ease;
}
.slide-fade-leave-active {
  transition: all 0.25s ease;
  opacity: 0;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>