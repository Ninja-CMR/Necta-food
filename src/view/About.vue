<script setup lang="ts">
import photoAbout from '../assets/photoAbout.jpg'
</script>

<template>
  <div id="about" class="mt-[55px]">

    <div class="flex flex-col md:flex-row gap-[30px] justify-center m-4 md:m-10 md:mx-auto md:max-w-6xl">

      <div class="md:w-1/2 text-center md:text-left">

        <h1 class="text-4xl md:text-5xl font-bold mb-5 text-red-800 drop-shadow-lg">
          About <span class="text-black">Necta Food</span>
        </h1>

        <p class="text-[15px] md:text-[20px] mb-5 text-gray-600">
          At Necta food we believe in serving delicious meals made with love and the finest ingredients.
          Every dish is prepared fresh to ensure quality and taste.
        </p>

        <p class="text-[15px] md:text-[20px] mb-8 text-gray-600">
          Our passionate teams of chefs works tirelessly to bring you authentic flavors
          and innovative dishes that satisfy any palates.
        </p>

        <div class="flex flex-col gap-[10px] items-center md:items-start">

          <div class="flex flex-row gap-[10px] items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6 text-red-800 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <p class="text-left text-[15px] md:text-[20px] text-gray-800">Fresh ingredients source daily</p>
          </div>

          <div class="flex flex-row gap-[10px] items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6 text-red-800 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <p class="text-left text-[15px] md:text-[20px] text-gray-800">Expert chef with years of experience</p>
          </div>

          <div class="flex flex-row gap-[10px] items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6 text-red-800 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <p class="text-left text-[15px] md:text-[20px] text-gray-800">Fast and reliable delivery service</p>
          </div>
        </div>
      </div>

      <img
          :src="photoAbout"
          alt="About Necta Food"
          class="w-full h-auto object-cover rounded-2xl md:w-1/2 md:h-auto"
      >
    </div>
  </div>
</template>