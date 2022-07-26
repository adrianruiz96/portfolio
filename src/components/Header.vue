<template>
    <div class="text-gray-600">
        <nav class="py-5 items-center text-base justify-center">
            <a v-on:click="goTo('/home')" :class="{ 'text-white': currentLocation == '/home' }"
                class="cursor-pointer ml-5 hover:text-white">About Me</a>
            <a v-on:click="goTo('/links')" :class="{ 'text-white': currentLocation == '/links' }"
                class="cursor-pointer ml-5 hover:text-white">Links</a>
        </nav>
    </div>
    <section class="text-gray-400 bg-gray-900">
        <div class="flex flex-col">
            <div class="h-1 bg-gray-800 rounded overflow-hidden"></div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue' // This allows us to use $router without TypeScript errors
export default defineComponent ({
    name: 'Header',
    data() {
        return {
            currentLocation: location.pathname
        }
    },
    methods: {
        goTo(link: String) {
            if (link === '/home') {
                this.$router.push({ name: 'Home' });
            } else if (link === '/links') {
                this.$router.push({ name: 'Links' });
            }
        }
    }
})
</script>
