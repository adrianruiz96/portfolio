<template>
  <Header></Header>
  <section class="px-5 text-gray-400 bg-gray-900">
    <div class="mx-auto">
      <div class="flex flex-col">
        <div class="flex flex-wrap sm:flex-row flex-col py-6">
          <h1 class="text-lg text-white">Coming soon...</h1>
        </div>
        <div class="flex flex-wrap sm:flex-row flex-col">
          
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script lang="ts">
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: 'Home',
    components: {
      Header,
      Footer,
    }
  }
</script>