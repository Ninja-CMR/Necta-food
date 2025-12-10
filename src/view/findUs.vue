<script setup lang="ts">
 import findUs from '../assets/findUs.jpg'
 import WhatsappButton from '../components/whatsappButton.vue'
 import iconBike from '../assets/Icon/bikeIcon.png'
 const restaurantPhoneNumber = '237640838859';

</script>

<template>
    <div class="mt-[100px]">
      <h1 class="text-4xl md:text-5xl font-bold mb-5 text-center text-red-800 drop-shadow-lg">
        Find <span class="text-black">Us</span>
      </h1>
      <p class="text-[15px] md:text-[20px] mb-5 text-center text-gray-600">
        Visit our restaurant or order delivery
      </p>
      <div class="flex flex-col md:flex-row gap-[30px] justify-center items-center m-4 md:m-10 md:mx-auto md:max-w-6xl">
        <img :src="findUs" alt="" class="border-3 border-red-800 w-full h-auto object-cover rounded-2xl md:w-1/2 md:h-auto">
        <div class = "flex flex-col gap-[15px] ">
          <div class="flex flex-col p-[15px] bg-red-200 rounded-2xl shadow ">
            <div class="flex flex-row gap-[10px] mb-[15px] items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6 text-red-800">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <p class="text-red-800 text-2xl font-bold ">Address</p>
            </div>
            <p class="text-xl text-gray-600">Ndogbon Socaver 100 m to  Geneva Hotel</p>
          </div>
          <div>
            <div class="flex flex-col p-[15px] bg-red-200 rounded-2xl shadow mb-[15px] ">
              <div class="flex flex-row gap-[10px] mb-[15px] items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6 text-red-800">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                <p class="text-red-800 text-2xl font-bold ">Contact</p>
              </div>
              <p class="text-xl  mb-[15px] text-gray-600">+237 640 838 859</p>
              <WhatsappButton :phone-number="restaurantPhoneNumber"
                              message="Bonjour, je voudrais connaître les plats du jour."
                              button-text="Whatsapp Us"
              />
            </div>
            <div class="flex flex-col p-[15px] bg-red-200 rounded-2xl shadow ">
              <div class="flex flex-row gap-[10px] mb-[15px] items-center ">
                <img :src="iconBike" alt="">
                <p class="text-red-800 text-2xl font-bold ">Delivery Areas</p>
              </div>
              <p class="text-xl text-gray-600">We deliver within a 5km raduis. Contact us to confirm your area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>