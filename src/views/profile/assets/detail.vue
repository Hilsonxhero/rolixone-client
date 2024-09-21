<script setup lang="ts">
import { ref, shallowRef, onMounted, watch } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

// components
import ProfileBanner from '@/components/apps/user-profile/ProfileBanner.vue';
import IntroCard from '@/components/apps/user-profile/IntroCard.vue';
import PhotosCard from '@/components/apps/user-profile/PhotosCard.vue';
import PostListing from '@/components/apps/user-profile/PostListing.vue';
import AddPost from '@/components/apps/user-profile/posts/AddPost.vue';

const page = ref({ title: 'Asset Detail' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '/'
    },
    {
        text: 'Asset Detail',
        disabled: true,
        href: '#'
    }
]);

import { WalletIcon, CreditCardIcon } from 'vue-tabler-icons';
import { useRoute } from 'vue-router';
import ApiService from '@/services/ApiService';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { router } from '@/router';

const loading = ref(false);

const loader = ref(false);

const tab = ref(null);

const asset = ref({});

const visible_deposit = ref(false)

const items = shallowRef([
    { tab: 'Transaction', icon: CreditCardIcon, href: '/apps/user/profile' },

]);

const route = useRoute();


const fetchData = async () => {
    try {
        const { data } = await ApiService.get(`application/profile/assets/${route.params.id}`);

        asset.value = data.data;

        loading.value = false;
    } catch (error) { }
};



const showDeposit = () => {
    visible_deposit.value = true
}

const handleDeposit = async () => {
    loader.value = true
    try {
        const form_data = {
            amount: form.value.amount
        }
        const { data } = await ApiService.post(`application/profile/assets/deposit/${route.params.id}`, form_data);

        console.log("data", data);

        router.push({ name: 'user-orders-detail', params: { id: data.data.id } })

        loading.value = false;
    } catch (error) { }
}

const form = ref({
    amount: ""
})


onMounted(() => {
    fetchData()
})

</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-card elevation="10" class="overflow-hidden">
        <!-- <img :src="profileBg" alt="profile" class="w-100" /> -->
        <div>
            <v-row class="mt-1">
                <v-col cols="12" lg="4" sm="12" class="order-sm-second">
                    <div class="px-4 py-1">
                        <v-row class="">
                            <v-col cols="4" class="text-center flex flex-col  items-center">
                                <WalletIcon size="20" />
                                <h4 class="text-h4">{{ asset?.balance }}</h4>
                                <h6 class="text-h6 font-weight-regular">balance</h6>
                            </v-col>

                        </v-row>
                    </div>
                </v-col>
                <v-col cols="12" lg="4" sm="12" class="flex flex-col justify-center items-center">
                    <div class="text-xl font-semibold mt-3 uppercase">
                        {{ asset?.name }}
                    </div>
                    <span class="textSecondary font-weight-regular uppercase"> {{ asset?.network }}</span>
                </v-col>
                <v-col cols="12" lg="4" class="d-flex align-center justify-center justify-lg-end order-sm-third">
                    <div class="d-flex align-center justify-space-between px-10 py-1 gap-3">
                        <!-- <v-btn icon variant="flat" size="x-small" color="primary" class="btn-brand-facebook">
                            <BrandFacebookIcon size="16" />
                        </v-btn>
                        <v-btn icon variant="flat" size="x-small" color="primary" class="btn-brand-twitter">
                            <BrandTwitterIcon size="16" />
                        </v-btn>
                        <v-btn icon variant="flat" size="x-small" color="primary" class="btn-brand-dribbble">
                            <BrandDribbbleIcon size="16" />
                        </v-btn>
                        <v-btn icon variant="flat" size="x-small" color="primary" class="btn-brand-youtube">
                            <BrandYoutubeIcon size="16" />
                        </v-btn> -->
                        <v-btn variant="flat" color="success" @click="showDeposit">Deposit</v-btn>
                        <v-btn variant="flat" color="primary">withdrawal</v-btn>
                    </div>
                </v-col>
                <v-col md="12" class="order-sm-last">
                    <v-tabs v-model="tab" color="primary" class="profiletab bg-lightprimary">
                        <v-tab v-for="item in items" :key="item.tab" :to="item.href"
                            class="font-weight-regular text-subtitle-1 ">
                            <component :is="item.icon" size="18" stroke-width="1.5" class="mr-2"></component>
                            {{ item.tab }}
                        </v-tab>
                    </v-tabs>
                </v-col>
            </v-row>
        </div>
    </v-card>

    <v-dialog v-model="visible_deposit" max-width="500">
        <template v-slot:default="{ isActive }">
            <v-card rounded="lg">
                <v-card-title class="d-flex justify-space-between align-center">
                    <div class="text-h5 text-medium-emphasis ps-2">
                        Deposit
                    </div>

                    <v-btn icon="mdi-close" variant="text" @click="isActive.value = false"></v-btn>
                </v-card-title>

                <v-divider class="mb-4"></v-divider>

                <Form @submit="handleDeposit" ref="formRef">

                    <v-card-text>
                        <div class="text-medium-emphasis mb-8">
                            Deposit guide text.
                        </div>



                        <div class="grid grid-cols-12 gap-3">
                            <div class="col-span-12">
                                <Field mode="passive" name="amount" v-slot="{ field }" rules="required"
                                    label="  Amount">
                                    <v-text-field type="number" v-bind="field" v-model="form.amount" label=" Amount "
                                        variant="outlined" hide-details="auto"></v-text-field>
                                </Field>
                                <div class="invalid-feedback d-block">
                                    <ErrorMessage name="amount" />
                                </div>
                            </div>
                        </div>


                        <!-- <div class="text-overline mb-2">💎 PREMIUM</div>

                        <div class="text-medium-emphasis mb-1">
                            Share with unlimited people and get more insights about your network. Try Premium Free for
                            30
                            days.
                        </div>

                        <v-btn class="text-none font-weight-bold ms-n4" color="primary" text="Retry Premium Free"
                            variant="text"></v-btn> -->
                    </v-card-text>

                    <v-divider class="mt-2"></v-divider>

                    <v-card-actions class="my-2 d-flex justify-end">
                        <v-btn class="text-none" rounded="xl" text="Cancel" @click="visible_deposit = false"></v-btn>

                        <v-btn :loading="loader" type="submit" class="text-none" color="primary" rounded="xl"
                            text="Continue" variant="flat"></v-btn>
                    </v-card-actions>

                </Form>
            </v-card>
        </template>
    </v-dialog>
</template>
