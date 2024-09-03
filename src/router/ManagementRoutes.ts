const MainRoutes = {
    path: '/management',
    meta: {
        requiresAuth: true
    },
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'management-dashboard',
            path: 'dashboard',
            component: () => import('@/views/management/dashboard.vue')
        },
        {
            name: 'management-users-index',
            path: 'users',
            component: () => import('@/views/management/users/index.vue')
        },

    ]
};

export default MainRoutes;
