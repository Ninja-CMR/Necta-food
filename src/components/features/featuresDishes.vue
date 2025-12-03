<script setup>
import cardFeatures from "../features/components/cardFeatures.vue";
</script>

<template>
  <section id="about" class="py-16 px-4 bg-gray-50">
    <h1 class="text-4xl md:text-5xl font-bold mb-12 text-center text-red-800 drop-shadow-lg">
      Featured Dishes
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      <cardFeatures
          title="Signature Burger"
          image="src/assets/features-dishes-images/featuresBurger.jpg"
          description="Juicy beef patty"
      />
      <cardFeatures
          title="Crispy Fries"
          image="src/assets/features-dishes-images/featuresPotato.jpg"
          description="Golden fries potatoes"
      />
      <cardFeatures
          title="Grilled Chicken"
          image="src/assets/features-dishes-images/featureChickens.jpg"
          description="Perfectly seasoned grilled chickens"
      />
      <cardFeatures
          title="Fresh Salad"
          image="src/assets/features-dishes-images/featureSales.jpg"
          description="Healthy mix and organic"
      />
    </div>
  </section>
</template>

<style scoped>
</style>
