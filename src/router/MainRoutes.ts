const MainRoutes = {
    path: '/main',
    meta: {
        requiresAuth: true
    },
    redirect: '/main',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'user-dashboard',
            path: '/dashboards/dashboard',
            component: () => import('@/views/dashboards/dashboard1/index.vue')
        },

    ]
};

export default MainRoutes;
