<template>
    <div id="GoogleButton"></div>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import jwt_decode from 'jwt-decode';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const store = useStore();
        const router = useRouter();

        // Initialize Google OAuth on component mount
        onMounted(() => {
            //If the user is logged, we will redirect to home
            if(store.getters.isLoggedIn) {
                router.push('/home');
            }

            function handleCredentialResponse(response) {
                let resp = jwt_decode(response.credential);
                store.commit('setUserLogged', true);
                //Set the local storage, as we are not using a database for this test
                localStorage.setItem("userLogged", true);
                localStorage.setItem("user", JSON.stringify(resp));
                //redirect to home
                router.push('/home');
            }

            //Init google login button GIS
            google.accounts.id.initialize({
                client_id: store.getters.googleClientId,
                callback: handleCredentialResponse
            });
            
            google.accounts.id.renderButton(
                document.getElementById("GoogleButton"),
                {
                    type: "standard",
                    shape: "pill",
                    theme: "outline",
                    size: "large"
                }
            );
        });
    }
};
</script>





