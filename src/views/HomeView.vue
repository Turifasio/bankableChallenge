<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <v-main>
        <v-parallax src="/src/assets/images/finance.webp" height="300">
            <div class="d-flex flex-column fill-height justify-center text-center">
                <h1 class="text-h2 mb-4 banner-text">
                    My Invoiceme panel
                </h1>
                <h4 class="subheading text-h5 banner-text">
                    Your online tool to control your finances
                </h4>
            </div>
        </v-parallax>

        <v-container>
            <div class="section">
                <v-row>
                    <v-col cols="12">
                        <div class="d-flex flex-column fill-height text-center">
                            <h1 class="text-h4 mb-6 ma-sm-6">
                                Most used tools
                            </h1>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="mb-10">
                    <v-col cols="12" sm="4">
                        <v-hover
                            v-slot="{ isHovering, props }"
                            open-delay="10">
                            <router-link to="/upload-invoice">
                                <v-card
                                    :elevation="isHovering ? 10 : 2"
                                    :class="{ 'on-hover': isHovering }"
                                    class="mx-auto"
                                    max-width="400"
                                    v-bind="props">
                                    <v-img
                                        class="align-end text-white"
                                        height="200"
                                        src="/src/assets/images/upload.webp"
                                        cover>
                                        <v-card-title class="text-center text-uppercase text-wrap">Upload your invoice</v-card-title>
                                    </v-img>
                                </v-card>
                            </router-link>
                        </v-hover>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-hover
                            v-slot="{ isHovering, props }"
                            open-delay="10">
                            <router-link to="/home">
                                <v-card
                                    :elevation="isHovering ? 10 : 2"
                                    :class="{ 'on-hover': isHovering }"
                                    class="mx-auto"
                                    max-width="400"
                                    v-bind="props">
                                    <v-img
                                        class="align-end text-white"
                                        height="200"
                                        src="/src/assets/images/compare.webp"
                                        cover>
                                        <v-card-title class="text-center text-uppercase text-wrap">Compare your expenses</v-card-title>
                                    </v-img>
                                </v-card>
                            </router-link>
                        </v-hover>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-hover
                            v-slot="{ isHovering, props }"
                            open-delay="10">
                            <router-link to="/home">
                                <v-card
                                    :elevation="isHovering ? 10 : 2"
                                    :class="{ 'on-hover': isHovering }"
                                    class="mx-auto"
                                    max-width="400"
                                    v-bind="props">
                                    <v-img
                                        class="align-end text-white"
                                        height="200"
                                        src="/src/assets/images/payment.webp"
                                        cover>
                                        <v-card-title class="text-center text-uppercase text-wrap">Pay gateway chart</v-card-title>
                                    </v-img>
                                </v-card>
                            </router-link>
                        </v-hover>
                    </v-col>
                </v-row>
            </div>
        </v-container>

        <div class="banner section">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <div class="justify-center text-center">
                            <h3 class="text-h4">
                                Your feedback is our best tool to improve
                            </h3>
                            <h5 class="text-h5 ma-3">
                                Follow our feedback form if you want to share something with our team
                            </h5>
                            <router-link
                                to="/home"
                                custom
                                v-slot="{ navigate }">
                                <v-btn 
                                    size="large"
                                    rounded="xl"
                                    @click="navigate">
                                    Feedback
                                </v-btn>
                            </router-link>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <v-container>
            <div class="section">
                <v-row>
                    <v-col cols="12">
                        <div class="d-flex flex-column fill-height text-center">
                            <h1 class="text-h4 mb-6 ma-sm-6">
                                Last news and posts
                            </h1>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="mb-10">
                    <v-col cols="12" sm="4">
                        <v-lazy
                            :min-height="200"
                            :options="{'threshold':0.5}"
                            transition="fade-transition">
                            <v-card
                                class="mx-auto"
                                max-width="400">
                                <v-img
                                    class="align-end text-white"
                                    height="200"
                                    src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                                    cover>
                                </v-img>
                                <v-card-title>Top 10 formats for your invoices</v-card-title>

                                <v-card-subtitle class="pt-4">
                                    By Christian Bale
                                </v-card-subtitle>

                                <v-card-text>
                                    <div>10-08-2023</div>

                                    <div>Wondering how to look more professional?</div>
                                </v-card-text>

                                <v-card-actions>
                                    <router-link to="/home" v-slot="{ navigate }">
                                        <v-btn 
                                            rounded="xl"
                                            color="red"
                                            @click="navigate">
                                            Explore
                                        </v-btn>
                                    </router-link>
                                </v-card-actions>
                            </v-card>
                        </v-lazy>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-lazy
                            :min-height="200"
                            :options="{'threshold':0.5}"
                            transition="fade-transition">
                            <v-card
                                class="mx-auto"
                                max-width="400">
                                <v-img
                                    class="align-end text-white"
                                    height="200"
                                    src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
                                    cover>
                                </v-img>
                                <v-card-title>Top 10 formats for your invoices</v-card-title>

                                <v-card-subtitle class="pt-4">
                                    By Christian Bale
                                </v-card-subtitle>

                                <v-card-text>
                                    <div>10-08-2023</div>

                                    <div>Wondering how to look more professional?</div>
                                </v-card-text>

                                <v-card-actions>
                                    <router-link to="/home" v-slot="{ navigate }">
                                        <v-btn 
                                            rounded="xl"
                                            color="red"
                                            @click="navigate">
                                            Explore
                                        </v-btn>
                                    </router-link>
                                </v-card-actions>
                            </v-card>
                        </v-lazy>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-lazy
                            :min-height="200"
                            :options="{'threshold':0.5}"
                            transition="fade-transition">
                            <v-card
                                class="mx-auto"
                                max-width="400">
                                <v-img
                                    class="align-end text-white"
                                    height="200"
                                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                    cover>
                                </v-img>
                                <v-card-title>Top 10 formats for your invoices</v-card-title>

                                <v-card-subtitle class="pt-4">
                                    By Christian Bale
                                </v-card-subtitle>

                                <v-card-text>
                                    <div>10-08-2023</div>

                                    <div>Wondering how to look more professional?</div>
                                </v-card-text>

                                <v-card-actions>
                                    <router-link to="/home" v-slot="{ navigate }">
                                        <v-btn 
                                            rounded="xl"
                                            color="red"
                                            @click="navigate">
                                            Explore
                                        </v-btn>
                                    </router-link>
                                </v-card-actions>
                            </v-card>
                        </v-lazy>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-lazy
                            :min-height="200"
                            :options="{'threshold':0.5}"
                            transition="fade-transition">
                            <v-card
                                class="mx-auto"
                                max-width="400">
                                <v-img
                                    class="align-end text-white"
                                    height="200"
                                    src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
                                    cover>
                                </v-img>
                                <v-card-title>Top 10 formats for your invoices</v-card-title>

                                <v-card-subtitle class="pt-4">
                                    By Christian Bale
                                </v-card-subtitle>

                                <v-card-text>
                                    <div>10-08-2023</div>

                                    <div>Wondering how to look more professional?</div>
                                </v-card-text>

                                <v-card-actions>
                                    <router-link to="/home" v-slot="{ navigate }">
                                        <v-btn 
                                            rounded="xl"
                                            color="red"
                                            @click="navigate">
                                            Explore
                                        </v-btn>
                                    </router-link>
                                </v-card-actions>
                            </v-card>
                        </v-lazy>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-lazy
                            :min-height="200"
                            :options="{'threshold':0.5}"
                            transition="fade-transition">
                            <v-card
                                class="mx-auto"
                                max-width="400">
                                <v-img
                                    class="align-end text-white"
                                    height="200"
                                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                    cover>
                                </v-img>
                                <v-card-title>Top 10 formats for your invoices</v-card-title>

                                <v-card-subtitle class="pt-4">
                                    By Christian Bale
                                </v-card-subtitle>

                                <v-card-text>
                                    <div>10-08-2023</div>

                                    <div>Wondering how to look more professional?</div>
                                </v-card-text>

                                <v-card-actions>
                                    <router-link to="/home" v-slot="{ navigate }">
                                        <v-btn 
                                            rounded="xl"
                                            color="red"
                                            @click="navigate">
                                            Explore
                                        </v-btn>
                                    </router-link>
                                </v-card-actions>
                            </v-card>
                        </v-lazy>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-lazy
                            :min-height="200"
                            :options="{'threshold':0.5}"
                            transition="fade-transition">
                            <v-card
                                class="mx-auto"
                                max-width="400">
                                <v-img
                                    class="align-end text-white"
                                    height="200"
                                    src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
                                    cover>
                                </v-img>
                                <v-card-title>Top 10 formats for your invoices</v-card-title>

                                <v-card-subtitle class="pt-4">
                                    By Christian Bale
                                </v-card-subtitle>

                                <v-card-text>
                                    <div>10-08-2023</div>

                                    <div>Wondering how to look more professional?</div>
                                </v-card-text>

                                <v-card-actions>
                                    <router-link to="/home" v-slot="{ navigate }">
                                        <v-btn 
                                            rounded="xl"
                                            color="red"
                                            @click="navigate">
                                            Explore
                                        </v-btn>
                                    </router-link>
                                </v-card-actions>
                            </v-card>
                        </v-lazy>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </v-main>
</template>