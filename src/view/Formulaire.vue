<script setup lang="ts">
import { Form } from 'vee-validate';
import InputField from '../components/formComponent/inputFields.vue';
import { useContactFormValidation } from '../composables/useContactFormValidation.ts';
const { validationSchema } = useContactFormValidation();

const handleSubmission = (values: any, { resetForm }: any) => {
  console.log('Données du formulaire valides :', values);
  alert('Merci pour votre message ! Nous vous recontacterons bientôt.');
  resetForm();
};

</script>

<template>
  <div class="min-h-screen pt-20 bg-pink-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <header class="text-center mb-10">
        <h1 class="text-5xl font-extrabold text-black">
          Get in <span class="text-red-800">Touch</span>
        </h1>
        <p class="text-lg text-gray-600 mt-2">
          We'd love to hear from you!
        </p>
      </header>

      <div class="bg-white p-6 md:p-10 rounded-xl shadow-2xl">

        <Form @submit="handleSubmission" :validation-schema="validationSchema">

          <div class="mb-6">
            <InputField
                name="name"
                label="Name"
                placeholder="Your name"
                :required="true"
            />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <InputField
                name="email"
                label="Email"
                type="email"
                placeholder="your@email.com"
                :required="true"
            />
            <InputField
                name="phone"
                label="Phone"
                type="tel"
                placeholder="(237) 123-4567"
                :required="true"
            />
          </div>

          <div class="mb-8">
            <InputField
                name="message"
                label="Message"
                as="textarea"
                placeholder="Your message..."
                :required="true"
            />
          </div>

          <div class="flex justify-end">
            <button
                type="submit"
                class="bg-red-800 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-md"
            >Send a message
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>