import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import ManagementRoutes from './ManagementRoutes';
import AppRoutes from './AppRoutes';

import AuthRoutes from './AuthRoutes';
import { useAuthStore } from '@/stores/auth';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/authentication/Error.vue')
        },
        AppRoutes,
        MainRoutes,
        ManagementRoutes,
        AuthRoutes
    ]
});

router.beforeEach(async (to, from, next) => {
    const store = useAuthStore();

    if (to.name !== "auth-login") {
        await store.init();
    }

    console.log("loggedIn", store.loggedIn);


    if (
        (to.meta.requiresAuth || to.matched.some((parent) => parent.meta.requiresAuth)) &&
        !store.loggedIn
    ) {


        next({ name: "auth-login" });
    }

    if (to.meta.guest && store.loggedIn) {

        next({ name: "user-dashboard" });
    }

    next();
});
