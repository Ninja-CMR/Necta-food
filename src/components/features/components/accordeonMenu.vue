<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'

import { menuItems } from '../../../utils/menuData.ts'

</script>

<template>
  <AccordionRoot
      class="m-4 md:m-10 bg-red-800 rounded-2xl shadow-xl "
      default-value="traditionnels"
      type="single"
      :collapsible="true"
  >
    <template
        v-for="item in menuItems"
        :key="item.value"
    >
      <AccordionItem
          class="overflow-hidden first:rounded-t-2xl last:rounded-b-2xl"
          :value="item.value"
      >
        <AccordionHeader class="flex">
          <AccordionTrigger class="flex h-[55px] flex-1 cursor-pointer items-center justify-between bg-red-800 px-5 text-lg font-bold text-white shadow-[0_1px_0_rgba(0,0,0,0.1)] hover:bg-red-700 transition-colors duration-200 outline-none group">
            <span class="text-xl md:text-2xl text-center">{{ item.title }}</span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-6 text-white transition-transform duration-300 group-data-[state=open]:rotate-90"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </AccordionTrigger>
        </AccordionHeader>

        <AccordionContent class="bg-white data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-sm">
          <div class="px-5 py-4">
            <ul class="list-none space-y-1">
              <li
                  v-for="(dish, index) in item.content"
                  :key="index"
                  class="flex items-start text-gray-800"
              >
                <span class="mr-2 text-red-800 font-bold text-lg leading-none align-middle">&diams;</span>
                {{ dish }}
              </li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>

<style>
</style>