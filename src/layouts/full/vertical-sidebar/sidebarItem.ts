export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    id?: number;
    to?: string;
    chip?: string;
    BgColor?: string;
    chipBgColor?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

// import {
//     WalletIcon
// } from 'vue-tabler-icons';
const sidebarItem: menu[] = [
    {
        header: 'dashboards',
        id: 1,
        children: [
            {
                title: 'Dashboard',
                icon: 'widget-add-line-duotone',
                to: '/profile/dashboard'
            },
            // {
            //     title: 'Dashboard2',
            //     icon: 'chart-line-duotone',
            //     to: '/dashboards/dashboard2'
            // },
            // {
            //     title: 'Dashboard3',
            //     icon: 'screencast-2-line-duotone',
            //     to: '/dashboards/dashboard3'
            // }
        ]
    },

    // {
    //     header: 'apps',
    //     id: 1,
    //     children: [

    //         {
    //             title: 'Users',
    //             icon: 'shield-user-line-duotone',
    //             to: '/',
    //             children: [
    //                 {
    //                     title: 'Users List',
    //                     to: '/management/users'
    //                 },

    //             ]
    //         },

    //     ]
    // },


    // {
    //     header: 'assets',
    //     id: 1,
    //     children: [

    //         {
    //             title: 'Assets',
    //             icon: 'wallet-2-linear',
    //             to: '/',
    //             children: [
    //                 {
    //                     title: 'Assets List',
    //                     to: '/management/assets'
    //                 },
    //                 {
    //                     title: 'Assets Pairs',
    //                     to: '/management/asset/pairs'
    //                 },
    //             ]
    //         },

    //     ]
    // },


];

export default sidebarItem;
