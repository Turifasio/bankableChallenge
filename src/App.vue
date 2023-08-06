<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
    <v-app>
        <v-app-bar elevation="1" density="compact">
            <router-link to="/">HOME</router-link>
        </v-app-bar>

        <v-main>
            <v-container fluid class="main-content">
                <router-view v-slot="{ Component }">
                    <transition name="page-transition" mode="out-in">
                        <component :is="Component"></component>
                    </transition>
                </router-view>
            </v-container>
        </v-main>
        
        <the-footer></the-footer>
    </v-app>
</template>
