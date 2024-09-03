import { defineStore } from 'pinia';
import { router } from '@/router';

import ApiService from "@/services/ApiService";

import { computed, ref } from 'vue'

export const useAuthStore = defineStore("auth", () => {
    const user = ref({});
    const isLoggedIn = ref(false);
    const checked = ref(false);
    const errors = ref(null);
    const loggedIn = computed(() => isLoggedIn.value);

    const personalInfo = async () => {
        try {
            const { data } = await ApiService.get(`application/user/init`);

            user.value = data?.data?.user;
        } catch (error) {
            return error;
        }
    };


    const init = async () => {
        if (!checked.value)
            try {
                const { data } = await ApiService.get(`application/auth/otp/init`);

                console.log("data", data);

                user.value = data?.data?.user;
                isLoggedIn.value = data?.data?.is_logged_in;
                checked.value = true;



                return data
            } catch (error) {
                return error;
            }
    };

    const verify = async () => {
        try {
            const { data } = await ApiService.get(`application/auth/otp/init`);
            user.value = data?.data?.user;
            isLoggedIn.value = data?.data?.is_logged_in;
            checked.value = true;
            return data
        } catch (error) {
            return error;
        }
    };


    const login = async (form: any) => {
        try {
            checked.value = false;
            const { data } = await ApiService.post(`application/auth/otp/login`, form);
            isLoggedIn.value = true;
            return data;
        } catch (error) {
            return error;
        }

    };

    const authenticate = async (form: any) => {
        try {
            const { data } = await ApiService.post(`application/auth/otp/authenticate`, form);
            return data;
        } catch (error) {
            return error;
        }
    };

    const logout = async () => {
        try {
            checked.value = false;
            const { data } = await ApiService.post(`application/auth/logout`, {});
            user.value = null;
            isLoggedIn.value = false;
        } catch (error) {
            return error;
        }
    };

    return {
        user,
        isLoggedIn,
        personalInfo,
        checked,
        errors,
        init,
        login,
        authenticate,
        logout,
        loggedIn,
        verify
    };
});





// export const useAuthStore = defineStore({
//     id: 'auth',
//     state: () => ({
//         // initialize state from local storage to enable user to stay logged in
//         // @ts-ignore
//         user: JSON.parse(localStorage.getItem('user')),
//         returnUrl: null
//     }),
//     actions: {

//         async login(username: string, password: string) {
//             const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });

//             // update pinia state
//             this.user = user;
//             // store user details and jwt in local storage to keep user logged in between page refreshes
//             localStorage.setItem('user', JSON.stringify(user));
//             // redirect to previous url or default to home page
//             router.push(this.returnUrl || '/dashboards/modern');
//         },
//         logout() {
//             this.user = null;
//             localStorage.removeItem('user');
//             router.push('/');
//         }
//     }
// });
