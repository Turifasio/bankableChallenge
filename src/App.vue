<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue'
import ProfileMenu from './components/ProfileMenu.vue'
</script>

<template>
    <v-app>
        <div class="fullsize">
            <v-app-bar app v-if="$store.getters.showUI">
                <router-link to="/home">
                    <img
                    class="ml-2 mr-2 logo"
                    src="/src/assets/images/invoiceme.png"
                    alt="Invoiceme logo">
                </router-link>

                <!-- Invoices and Coming Soon menu -->
                <v-menu transition="slide-x-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn class="menu-button" v-bind="props">
                            Invoices
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title class="menu-link"><router-link to="/upload-invoice">Upload</router-link></v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title class="menu-link"><router-link to="/home">My invoices</router-link></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-menu>
                    <template v-slot:activator="{ on }">
                        <v-btn class="menu-button" v-bind="on" text>
                            Coming Soon
                        </v-btn>
                    </template>
                </v-menu>

                <v-spacer></v-spacer>

                <!-- User Profile Dropdown -->
                <profile-menu></profile-menu>
            </v-app-bar>

            <router-view v-slot="{ Component }">
                <component :is="Component" />
            </router-view>
            
            <the-footer v-if="$store.getters.showUI"></the-footer>
        </div>
    </v-app>
</template>
