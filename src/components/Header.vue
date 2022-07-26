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
import {VueRouter} from 'vue-router/types/router'

declare module 'vue/types/vue/' {
    interface Vue {
        $router: VueRouter
    }
}

export default {
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
}
</script>
