
<script setup lang="ts">
defineProps<{
  message: string | undefined;
}>();
</script>

<template>
  <div v-if="message" class="text-xs text-red-600 mt-1 pl-1">
    {{ message }}
  </div>
</template>
