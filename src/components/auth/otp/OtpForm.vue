<template>
    <div>
        <v-row class="d-flex mb-3">
            <v-col cols="12" sm="12">
                <Form @submit="handleSendCode" v-slot="{ errors, isSubmitting }" class="mt-5">
                    <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText"> Type your 6 digits
                        security code
                    </v-label>
                    <VTextField center v-model="code" class="mb-8 text-center centered-input" required
                        hide-details="auto"> </VTextField>

                    <div class="d-flex flex-wrap align-center my-3 ml-n2"></div>
                    <v-btn size="large" :loading="loader" color="primary" block type="submit" flat>Verify My
                        Account</v-btn>
                    <div v-if="errors.apiError" class="mt-2">
                        <v-alert color="error">{{ errors.apiError }}</v-alert>
                    </div>
                </Form>
            </v-col>
        </v-row>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRoute, useRouter } from 'vue-router';
import { Form } from 'vee-validate';

const props = defineProps({
    username: {
        type: String
    },
    end: {
        type: String
    },
    data: {
        type: Object
    }
});
const authStore = useAuthStore();

const resend = ref<boolean>(false);

const code = ref(null);
const loader = ref(false);
const ttl_time = ref<any>(props.end);
const error = ref<any>(null);
const route = useRoute();
const router = useRouter();

const handleSendCode = async () => {
    loader.value = true;
    const form = {
        username: props.username,
        code: code.value
    };
    try {
        const data = await authStore.login(form);

        console.log("data", data?.data?.user?.is_superuser);


        if (data.success) {
            await authStore.init();


            if (data?.data?.user?.is_superuser) {
                console.log("admin user");
                router.push({ name: 'management-dashboard' });
            } else {
                router.push({ name: 'user-dashboard' });
            }

            // route.query.backUrl ? router.push('route.query.backUrl') : router.push({ name: 'user-dashboard' });
        } else {
            error.value = data.data;
        }
        loader.value = false;
    } catch (error) {
        loader.value = false;
    }
};
</script>