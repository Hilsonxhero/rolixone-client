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

        {
            name: 'user-orders-index',
            path: 'orders',
            component: () => import('@/views/profile/orders/index.vue')
        },

        {
            name: 'user-orders-detail',
            path: 'orders/:id',
            component: () => import('@/views/profile/orders/detail.vue')
        },

    ]
};

export default MainRoutes;
