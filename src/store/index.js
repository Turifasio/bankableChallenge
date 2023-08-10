import { createStore } from "vuex";

const store = createStore({
    state: {
        googleId: "676519100210-te4brq3vsgc8a7ksk32b2p06625c85mj.apps.googleusercontent.com",
        userLogged: false,
        showUI: true,
        loading: false,
        fakeAPI: "https://jsonplaceholder.typicode.com/todos/1"
    },
    mutations: {
        setShowUI(state, value) {
            state.showUI = value;
        },
        setUserLogged(state, value) {
            state.userLogged = value;
        },
        setLoading (state, value) {
            state.loading = value;
        }
    },
    getters: {
        googleClientId: state => state.googleId,
        isLoggedIn: state => state.userLogged,
        showUI: state => state.showUI,
    }
});

export default store;
