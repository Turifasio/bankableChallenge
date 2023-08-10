<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue'
import ProfileMenu from './components/ProfileMenu.vue'
</script>

<template>
    <v-app>
        <div class="fullsize">
            <v-app-bar app v-if="$store.getters.showUI">
                <div class="d-flex align-center flex-wrap w-100">
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
                    <div class="mr-auto">
                        <profile-menu></profile-menu>
                    </div>
                </div>
            </v-app-bar>

            <router-view v-slot="{ Component, route }">
                <transition v-if="route.name != 'Login'" name="fade" mode="out-in">
                    <div :key="route.name" class="content-height">
                        <component :is="Component" />
                    </div>
                </transition>
                <component v-if="route.name == 'Login'" :is="Component" />
            </router-view>
            
            <the-footer v-if="$store.getters.showUI"></the-footer>
        </div>
    </v-app>
</template>
