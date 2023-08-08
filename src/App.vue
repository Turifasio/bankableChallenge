<script setup>
import { RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
    <v-app>
        <div class="fullsize">
            <router-view v-slot="{ Component }">
                <component :is="Component" />
            </router-view>
            
            <the-footer v-if="$store.getters.showFooter"></the-footer>
        </div>
    </v-app>
</template>
