const MainRoutes = {
    path: '/management',
    meta: {
        requiresAuth: true
    },
    component: () => import('@/layouts/management/FullLayout.vue'),
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
        {
            name: 'management-users-create',
            path: 'users/create',
            component: () => import('@/views/management/users/create.vue')
        },
        {
            name: 'management-users-edit',
            path: 'users/edit/:id',
            component: () => import('@/views/management/users/edit.vue')
        },

        // assets

        {
            name: 'management-assets-index',
            path: 'assets',
            component: () => import('@/views/management/assets/index.vue')
        },
        {
            name: 'management-assets-create',
            path: 'assets/create',
            component: () => import('@/views/management/assets/create.vue')
        },
        {
            name: 'management-assets-edit',
            path: 'assets/edit/:id',
            component: () => import('@/views/management/assets/edit.vue')
        },

        // pairs


        {
            name: 'management-pairs-index',
            path: 'asset/pairs',
            component: () => import('@/views/management/pairs/index.vue')
        },
        {
            name: 'management-pairs-create',
            path: 'asset/pairs/create',
            component: () => import('@/views/management/pairs/create.vue')
        },
        {
            name: 'management-pairs-edit',
            path: 'asset/pairs/edit/:id',
            component: () => import('@/views/management/pairs/edit.vue')
        },

    ]
};

export default MainRoutes;
