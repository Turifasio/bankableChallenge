<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="profile-button">
                <v-avatar class="mr-2">
                    <img :src="user.picture" alt="User Profile picture">
                </v-avatar>
                <span class="hideOnMobile">
                    {{ user.name }}
                </span>
            </v-btn>
        </template>
        <v-list>
            <v-list-item class="d-sm-none">
                <v-list-item-title class="menu-link text-overline font-weight-black">{{ user.name }}</v-list-item-title>
            </v-list-item>
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
import { ref, onMounted, computed } from 'vue';
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const userInfo = ref({});
const dataLoaded = ref(false);

onMounted(async() => {
    const localStgUser = JSON.parse(localStorage.getItem("user"));

    if (localStgUser) {
        userInfo.value.name = localStgUser.name;
        userInfo.value.picture = localStgUser.picture;
        dataLoaded.value = true;
    }
});

//We cannot directly use userInfo into the template, so we create a computed value to use instead
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
