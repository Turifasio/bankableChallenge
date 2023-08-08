import { createStore } from "vuex";

const store = createStore({
    state: {
        googleId: "676519100210-te4brq3vsgc8a7ksk32b2p06625c85mj.apps.googleusercontent.com",
        userLogged: false,
        showFooter: true,
    },
    mutations: {
        setShowFooter(state, value) {
            state.showFooter = value;
        },
        setUserLogged(state, value) {
            state.userLogged = value;
        }
    },
    getters: {
        googleClientId: state => state.googleId,
        isLoggedIn: state => state.userLogged,
        showFooter: state => state.showFooter,
    }
});

export default store;
