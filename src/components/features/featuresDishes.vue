<script setup>
import cardFeatures from "../features/components/cardFeatures.vue";
import burgerImg from '../../assets/features-dishes-images/featuresBurger.jpg'
import friesImg from '../../assets/features-dishes-images/featuresPotato.jpg'
import chickenImg from '../../assets/features-dishes-images/featureChickens.jpg'
import saladImg from '../../assets/features-dishes-images/saladeFeature.jpg'
</script>

<template>
  <section id="about" class="py-16 px-4 bg-gray-50">
    <h1 class="text-4xl md:text-5xl font-bold mb-5 text-center text-red-800 drop-shadow-lg">
      Featured Dishes
    </h1>
    <p class="text-center text-xl md:text-2xl mb-12 text-gray-600">Try our most popular menu items</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      <cardFeatures
          title="Signature Burger"
          :image="burgerImg"
          description="Juicy beef patty"
      />
      <cardFeatures
          title="Crispy Fries"
          :image="friesImg"
          description="Golden fries potatoes"
      />
      <cardFeatures
          title="Grilled Chicken"
          :image="chickenImg"
          description="Perfectly seasoned grilled chickens"
      />
      <cardFeatures
          title="Fresh Salad"
          :image="saladImg"
          description="Healthy mix and organic"
      />
    </div>
  </section>

  <section>

  </section>
</template>

<style scoped>
</style>
