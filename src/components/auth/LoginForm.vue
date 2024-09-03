<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { Form } from 'vee-validate';
import Otp from '@/components/auth/otp/OtpForm.vue';

/*Social icons*/
import google from '@/assets/images/svgs/google-icon.svg';
import facebook from '@/assets/images/svgs/facebook-icon.svg';
const loader = ref(false);
const end = ref<any>(null);
const user_data = ref({});
const code = ref(null);
const show_otp_code = ref(false);
const valid = ref(false);
const username = ref('info@wrappixel.com');
const emit = defineEmits(['change']);

const emailRules = ref([(v: string) => !!v || 'E-mail is required', (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid']);
const authStore = useAuthStore();

async function validate(values: any, { setErrors }: any) {
    loader.value = true;
    const formDate = {
        username: username.value
    };
    try {
        const data = await authStore.authenticate(formDate);
        if (data.success) {
            end.value = data.ttl * 1000;
            show_otp_code.value = true;
            user_data.value = data?.data;
            emit('change', end.value);
        }
        loader.value = false;


    } catch (error) {

    }

}
</script>

<template>


    <template v-if="show_otp_code">
        <h3 class="text-h3 my-6 heading">Two Step Verification</h3>
        <p class="text-body-1 textSecondary mt-2 text-13">
            We sent a verification code to your mobile. Enter the code from the email in the field below.
        </p>
        <Otp :data="user_data" :username="username" :end="end" @reset="show_otp_code = false" />
    </template>

    <template v-else>
        <h2 class="text-h3 my-6 heading">Sign in</h2>
        <div class="mb-6">Your User Account</div>
        <v-row class="d-flex mb-3">
            <v-col cols="6" sm="6" class="pr-2">
                <v-btn variant="outlined" size="large" class="border text-subtitle-1 hover-link-primary" block>
                    <img :src="google" height="16" class="mr-2" alt="google" />
                    Google
                </v-btn>
            </v-col>
            <v-col cols="6" sm="6" class="pl-2">
                <v-btn variant="outlined" size="large" class="border text-subtitle-1  hover-link-primary" block>
                    <img :src="facebook" width="20" class="mr-1" alt="facebook" />
                    Facebook
                </v-btn>
            </v-col>
        </v-row>
        <div class="d-flex align-center text-center mb-6">
            <div class="text-h6 w-100 px-5 font-weight-regular auth-divider position-relative">
                <span class="bg-surface px-5 py-3 position-relative">or sign in with</span>
            </div>
        </div>
        <Form @submit="validate" v-slot="{ errors, isSubmitting }" class="mt-5">
            <v-label class="font-weight-semibold pb-2 ">Username</v-label>
            <VTextField v-model="username" :rules="emailRules" class="mb-8" required hide-details="auto"></VTextField>


            <v-btn size="large" :loading="isSubmitting" color="primary" :disabled="valid" block type="submit" flat>Sign
                In</v-btn>
            <div v-if="errors.apiError" class="mt-2">
                <v-alert color="error">{{ errors.apiError }}</v-alert>
            </div>
        </Form>
    </template>


</template>
