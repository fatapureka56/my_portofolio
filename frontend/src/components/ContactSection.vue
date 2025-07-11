<script setup>
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />
      <p class="text-xl text-gray-300 mb-8">
        Jangan ragu untuk terhubung atau bertanya.
      </p>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=fatapureka56@gmail.com&su=Halo%20Fata&body=Halo%20Fata%20Pureka%2C%20saya%20ingin%20menghubungi%20Anda%20melalui%20portofolio%20web%20ini."
        target="_blank"
        rel="noopener"
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block mb-12"
      >
        Kirim Email
      </a>



      <div class="flex justify-center space-x-6 mb-8">
        <a
          href="https://github.com/fatapureka56"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300"
        >
          GitHub
        </a>

        <a
          href="https://www.instagram.com/fataspp/"https:
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300"
        >
          Instagram
        </a>
      </div>

      <p class="text-gray-500 text-sm">
        &copy; {{ new Date().getFullYear() }} Fata Pureka.
      </p>
    </div>
  </footer>
</template>
