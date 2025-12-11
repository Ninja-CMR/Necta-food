<script setup lang="ts">
// Création d'une structure de données simple pour la réutilisabilité et la clarté
const openingHours = [
  { day: 'Monday', hours: '10:00 AM - 10:00 PM' },
  { day: 'Tuesday', hours: '10:00 AM - 10:00 PM' },
  { day: 'Wednesday', hours: '10:00 AM - 10:00 PM' },
  { day: 'Thursday', hours: '10:00 AM - 10:00 PM' },
  { day: 'Friday', hours: '10:00 AM - 11:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 11:00 PM' },
  { day: 'Sunday', hours: '11:00 AM - 09:00 PM' },
];
</script>

<template>
  <div class="mb-10">
    <h1 class="text-4xl md:text-5xl font-bold mb-8 text-center text-black drop-shadow-lg">
      Opening <span class="text-red-800">Hours</span>
    </h1>

    <div class="bg-violet-200 p-6 md:p-10 mx-4 max-w-xl lg:max-w-2xl rounded-xl shadow-lg mx-auto">

      <ul class="space-y-4 divide-y divide-red-300">

        <li
            v-for="(item, index) in openingHours"
            :key="item.day"
            :class="['flex justify-between items-center text-lg md:text-xl', { 'pt-4': index > 0 }]"
        >
          <h3 class="font-bold text-black flex-1">
            {{ item.day }}
          </h3>

          <p class="text-gray-700 font-medium">
            {{ item.hours }}
          </p>
        </li>
      </ul>

    </div>
  </div>
</template>

<style scoped>
</style>