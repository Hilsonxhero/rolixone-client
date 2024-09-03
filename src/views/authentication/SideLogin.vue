<script setup lang="ts">
import LogoIcon from '@/layouts/full/logo/LogoIcon.vue';
/* Login form */
import LoginForm from '@/components/auth/LoginForm.vue';
</script>

<template>
    <div class="pa-3 h-100vh mh-100">
        <v-row class="h-100vh">
            <v-col cols="12" lg="5" xl="4" class="bg-surface auth">
                <div class="d-flex justify-center align-center h-100">
                    <div class="mt-xl-0 mt-5 auth-card">
                        <LogoIcon />

                        <LoginForm />
                        <!-- <h6 class="text-16 text-medium-emphasis d-flex align-center mt-6">
                            Didn't get the code?
                            <RouterLink to="/" class="pl-0 text-primary text-16 opacity-1 pl-2 text-decoration-none">
                                Resend</RouterLink>
                        </h6> -->
                    </div>
                </div>
            </v-col>
            <v-col cols="12" lg="7" xl="8"
                class="d-lg-flex d-none align-center justify-center authentication bg-darkgray position-relative">
                <div class="circle-top"></div>
                <div>
                    <LogoIcon class="circle-bottom" />
                </div>
                <div class="d-flex justify-center align-center w-100 h-n80">
                    <v-row class="justify-center z-index-2">
                        <v-col xl="6" lg="7">
                            <h1 class="text-h1 text-white lh-normal">
                                Welcome to
                                <br />
                                MatDash
                            </h1>
                            <p class="text-h6 text-white opacity-80 font-weight-regular mt-4 lh-md">
                                MatDash helps developers to build organized and well<br />
                                coded dashboards full of beautiful and rich modules.
                            </p>
                            <v-btn to="/" size="large" color="primary" class="mt-5"> Learn More </v-btn>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
