<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="profile-button">
                <v-avatar class="mr-2">
                    <img :src="user.picture" alt="User Profile picture">
                </v-avatar>
                <span class="hideOnMobile">
                    <template v-if="user">{{ user.name }}</template>
                </span>
            </v-btn>
        </template>
        <v-list>
            <v-list-item>
                <v-list-item-title class="menu-link"><router-link to="/home">Profile</router-link></v-list-item-title>
            </v-list-item>
            <v-divider color="error"></v-divider>
            <v-list-item>
                <v-list-item-title class="menu-link"><a @click="logOut">Sign out</a></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const userInfo = ref({});
const store = useStore();
const router = useRouter();
const dataLoaded = ref(false);

onMounted(async() => {
    const localStgUser = JSON.parse(localStorage.getItem("user"));
    userInfo.value.name = localStgUser.name;
    userInfo.value.picture = localStgUser.picture;
    dataLoaded.value = true;
});

const user = computed(() => userInfo.value);

function logOut() {
    //set user as logged false
    store.commit('setUserLogged', false);
    //Clear the local storage information
    localStorage.clear();
    //redirect to home
    router.push('/login');
}
</script>
