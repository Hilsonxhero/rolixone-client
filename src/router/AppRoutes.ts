const AppRoutes = {
    path: '/',
    component: () => import('@/layouts/app/AppLayout.vue'),
    children: [
        {
            name: 'landing',
            path: '/',
            component: () => import('@/views/pages/landingpage/index.vue')
        },
        {
            name: 'swap',
            path: 'swap',
            component: () => import('@/views/app/swap/index.vue')
        },
    ]
};

export default AppRoutes;
