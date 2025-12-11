  <script setup lang="ts">
    import accordeonMenu from "../components/features/components/accordeonMenu.vue"
  </script>

  <template>
    <section id="full-menu">
      <h1 class="text-4xl md:text-5xl font-bold mb-5 text-center text-red-800 drop-shadow-lg">
        Full <span class="text-4xl md:text-5xl font-bold mb-5 text-center text-black drop-shadow-lg">Menu</span>
      </h1>
      <p class="text-center text-xl md:text-2xl mb-12 text-gray-600">Explore all our delicious offerings</p>
      <accordeonMenu/>
    </section>
</template>

<style scoped>

</style>