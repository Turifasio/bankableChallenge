import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import UploadInvoiceView from '../views/UploadInvoiceView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: { name: 'Login' },
            component: LoginView,
            meta: { hideUI: true }
        },
        {
            path: '/login/',
            name: 'Login',
            component: LoginView,
            meta: { hideUI: true }
        },
        {
            path: '/home',
            name: 'Home',
            component: HomeView,
            meta: { requiresAuth: true }
        },
        {
            path: '/upload-invoice',
            name: 'Upload',
            component: UploadInvoiceView,
            meta: { requiresAuth: true }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if(localStorage.getItem("userLogged")) {
        store.commit('setUserLogged', localStorage.getItem("userLogged"));
    }

    // Set a global variable for UI show conditional
    if (to.meta.hideUI) {
        store.commit('setShowUI', false);
    } else {
        store.commit('setShowUI', true);
    }
    
    // Check if the route requires authentication
    if (to.meta.requiresAuth) {
        // Check if the user is authenticated
        if (store.getters.isLoggedIn) {
            next(); // Allow navigation
        } else {
            next('/'); // Redirect to the login page
        }
    } else {
        next(); // Continue navigation for routes that don't require authentication
    }
});

export default router
