<script setup lang="ts">
import logo from '../assets/logo.jpg'
</script>

<template>
  <div class="mt-[100px] bg-orange-600 p-8 md:p-12">

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

      <div class="flex flex-col gap-4 p-2 items-center md:items-start text-center md:text-left">
        <img :src="logo" alt="Necta Food Logo" class="w-[80px] h-[80px] object-cover rounded-2xl mb-2">
        <p class="text-white text-lg">
          Delicious food delivered fresh to your doorstep. <br> Order now and taste a difference.
        </p>
      </div>

      <div class="flex flex-col gap-4 p-2 items-center md:items-start text-center md:text-left">
        <h3 class="text-2xl font-bold text-white mb-2">Quick links</h3>
        <nav class="flex flex-col gap-2 font-medium text-white">
          <a href="#home" class="hover:underline">Home</a>
          <a href="#about" class="hover:underline">About</a>
          <a href="#find-us" class="hover:underline">Location</a>
          <a href="#contact" class="hover:underline">Contact</a>
        </nav>
      </div>

      <div class="flex flex-col gap-4 p-2 items-center md:items-start text-center md:text-left">
        <h3 class="text-2xl font-bold text-white mb-2">Contact Us</h3>

        <div class="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6 text-red-800 flex-shrink-0 mt-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <p class="text-white text-lg text-left">Ndogbon Socaver 100 m to Geneva Hotel</p>
        </div>

        <div class="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6 text-red-800 flex-shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
          <p class="text-white text-lg">+237 640 838 859</p>
        </div>

        <div class="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6 text-red-800 flex-shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <p class="text-white text-lg">infonecta@gmail.com</p>
        </div>
      </div>

    </div>

    <div class="max-w-7xl mx-auto pt-8 mt-8 border-t border-orange-500 text-center">
      <p class="text-white text-sm">
        &copy; {{ new Date().getFullYear() }} Necta Food. All rights reserved.
      </p>
    </div>
  </div>
</template>