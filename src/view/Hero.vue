<script setup lang="ts">

</script>

<template>
  <section
      id="home"
      class="relative w-full h-[90vh] sm:h-screen bg-cover bg-center"
  >
    <div class="absolute inset-0 bg-black/60"></div>


    <div class="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">


      <h1 class="text-4xl md:text-7xl font-extrabold mb-2 drop-shadow-lg text-orange-500">
        Fresh & Delicious
      </h1>
      <h1 class="text-4xl md:text-7xl font-extrabold mb-6 drop-shadow-lg text-red-600">
        Food Delivered
      </h1>
      <p class="text-base md:text-2xl mb-10 max-w-2xl leading-relaxed drop-shadow-md">
        Experience authentic flavors made with the finest ingredients,
        delivered straight to your doorstep.
      </p>
      <div class="flex flex-col  sm:flex-row gap-4 sm:gap-6">
        <a
            href="#"
            class="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 px-6 py-3 rounded-3xl text-lg font-semibold transition-all duration-300"
        >
          <img src="../assets/Icon/icons8-whatsapp-48.png" class="w-[32px]" />
          Order via WhatsApp
        </a>
        <a
            href="#"
            class="flex items-center gap-2 justify-center bg-orange-600 hover:bg-orange-500 px-6 py-3 rounded-3xl text-lg font-semibold transition-all duration-300"
        >
          <img src="../assets/Icon/icons8-burger-48.png" class="w-[32px]" />
          View Menu
        </a>

      </div>

    </div>
  </section>
</template>

<style scoped>
</style>
