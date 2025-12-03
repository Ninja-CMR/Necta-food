
<script setup lang="ts">
defineProps<{
  image: string;
  title: string;
  description: string;
}>();
</script>


<template>
  <div class="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 max-w-sm cursor-pointer">
    <div class="overflow-hidden rounded-2xl">
      <img
          :src="image"
          :alt="title"
          class="w-full h-48 object-cover rounded-2xl transform transition duration-300 hover:scale-105"
      />
    </div>

    <h3 class="mt-4 text-xl font-semibold text-gray-900">
      {{ title }}
    </h3>

    <p class="mt-2 text-gray-600">
      {{ description }}
    </p>
  </div>
</template>


