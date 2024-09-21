<template>
    <div>
        <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>

        <v-row>
            <v-col cols="12" md="6">
                <UiParentCard title="Order Detail">


                    <v-col cols="12">
                        <div class="d-flex gap-3 align-sm-center align-start mb-6">
                            <v-avatar size="48" class="mr-2" rounded="md" color="light">
                                <component :is="BoxIcon" stroke-width="2" size="22" />
                            </v-avatar>
                            <div>
                                <h6 class="text-h6 mb-2">Tracking Code</h6>
                                <p class="text-body-1 textSecondary">Tracking Code</p>
                            </div>
                            <div class="ms-auto mr-1 pa-sm-1 pa-6 pl-7">
                                <v-chip color="white" class="uppercase "> {{ order?.tracking_code
                                    }}
                                </v-chip>
                            </div>
                        </div>
                        <div class="d-flex gap-3 align-sm-center align-start mb-6">
                            <v-avatar size="48" class="mr-2" rounded="md" color="light">
                                <component :is="BoxIcon" stroke-width="2" size="22" />
                            </v-avatar>
                            <div>
                                <h6 class="text-h6 mb-2">Amount</h6>
                                <p class="text-body-1 textSecondary">Amount</p>
                            </div>
                            <div class="ms-auto mr-1 pa-sm-1 pa-6 pl-7">
                                <v-chip color="white" class="uppercase "> {{ order?.amount
                                    }} $
                                </v-chip>
                            </div>
                        </div>
                    </v-col>

                    <v-col cols="12">
                        <v-btn color="primary" flat @click="handlePay">Pay</v-btn>
                    </v-col>
                </UiParentCard>
            </v-col>
            <v-col cols="12" md="6">
                <UiParentCard title="Order Detail">
                    <v-col cols="12">
                        <template v-if="order.status == 'finished'">
                            <v-chip color="success" class="uppercase"> {{ order?.status }} </v-chip>
                        </template>
                        <template v-else>
                            <v-chip color="warning" class="uppercase"> {{ order?.status }} </v-chip>
                        </template>

                    </v-col>

                    <v-col cols="12">
                        <v-card variant="outlined">
                            <v-card-item>
                                <h4 class="text-h4">Notification Preferences</h4>
                                <div class="text-subtitle-1 textSecondary text-10 my-3">
                                    Select the notificaitons ou would like to receive via email. Please note that you
                                    cannot opt out of receving service
                                    messages, such as payment, security or legal notifications.
                                </div>
                                <div class="my-6">
                                    <v-label class="mb-2 font-weight-medium">Pay Address</v-label>
                                    <v-text-field color="primary" readonly variant="outlined" type="email" hide-details
                                        v-model="order.pay_address"></v-text-field>
                                    <!-- <span class="text-subtitle-1 textSecondary d-block mt-2">Required for
                                        notificaitons.</span> -->
                                </div>

                                <div class="d-flex gap-3 align-sm-center align-start mb-6">
                                    <v-avatar size="48" class="mr-2" rounded="md" color="light">
                                        <component :is="UserIcon" stroke-width="2" size="22" />
                                    </v-avatar>
                                    <div>
                                        <h6 class="text-h6 mb-2">Status</h6>
                                        <p class="text-body-1 textSecondary">Payment Status</p>
                                    </div>
                                    <div class="ms-auto mr-1 pa-sm-1 pa-6 pl-7">
                                        <template v-if="order.status == 'finished'">
                                            <v-chip color="success" class="uppercase"> {{ order?.status }} </v-chip>
                                        </template>
                                        <template v-if="order.status == 'waiting'">
                                            <v-chip color="warning" class="uppercase"> {{ order?.status }} </v-chip>
                                        </template>

                                    </div>
                                </div>
                                <div class="d-flex gap-3 align-sm-center align-start mb-6">
                                    <v-avatar size="48" class="mr-2" rounded="md" color="light">
                                        <component :is="UserIcon" stroke-width="2" size="22" />
                                    </v-avatar>
                                    <div>
                                        <h6 class="text-h6 mb-2">Outcome Currency</h6>
                                        <p class="text-body-1 textSecondary">Outcome Currency</p>
                                    </div>
                                    <div class="ms-auto mr-1 pa-sm-1 pa-6 pl-7">
                                        <template v-if="order.outcome_currency">
                                            <v-chip color="warning" class="uppercase "> {{ order?.outcome_currency
                                                }}
                                            </v-chip>
                                        </template>
                                        <template v-else>
                                            <v-chip color="warning" class="uppercase ">
                                                Waiting
                                            </v-chip>
                                        </template>

                                    </div>
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                </UiParentCard>
            </v-col>

        </v-row>
    </div>
</template>

<script setup lang="ts">
import { UserIcon, BuildingArchIcon, MailIcon, PhoneIcon, Message2Icon, HelpCircleFilledIcon, HelpIcon, BoxIcon } from 'vue-tabler-icons';
import { ref, onMounted, watch, nextTick, watchEffect } from 'vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import ApiService from '@/services/ApiService';

import { useRoute } from 'vue-router';

// import { Form, Field, ErrorMessage } from 'vee-validate';

import { router } from '@/router';

import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

const page = ref({ title: 'Orders' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'orders',
        disabled: true,
        href: '#'
    }
]);
const route = useRoute();
const loader = ref(false);
const order = ref({})
const loading = ref(false)
const formRef = ref<any>(null);

const fetchData = async () => {
    try {
        const { data } = await ApiService.get(`application/profile/orders/${route.params.id}`);

        order.value = data.data;

        loading.value = false;
    } catch (error) { }
};

const handlePay = () => {
    window.open(order.value.invoice_url, '_blank');
}


// watchEffect(() => {
//     if (formRef.value) {
//         formRef.value.setValues({
//             ...order.value
//         });
//     }
// });



onMounted(async () => {
    await fetchData();
});

</script>