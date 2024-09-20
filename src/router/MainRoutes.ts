const MainRoutes = {
    path: '/profile',
    meta: {
        requiresAuth: true
    },
    redirect: '/main',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'user-dashboard',
            path: 'dashboard',
            component: () => import('@/views/profile/dashboard.vue')
        },

        {
            name: 'user-asset-detail',
            path: 'assets/:id',
            component: () => import('@/views/profile/assets/detail.vue')
        },

    ]
};

export default MainRoutes;
