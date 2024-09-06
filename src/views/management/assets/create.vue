<script setup lang="ts">
import { ref, onMounted, watchEffect, watch } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import ApiService from '@/services/ApiService';
import { useRoute } from 'vue-router';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { router } from '@/router';
import { useDebounceFn } from '@vueuse/core';
import { CashBanknoteIcon } from 'vue-tabler-icons';

const page = ref({ title: 'Create Asset' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        to: { name: 'management-dashboard' }
    },
    {
        text: 'Assets',
        disabled: false,
        to: { name: 'management-assets-index' }
    },
    {
        text: 'Create Asset',
        disabled: true,
        href: '#'
    }
]);
const formRef = ref<any>(null);
const loading = ref(false);
const form = ref({
    name: null,
    symbol: null,
    network: null,
    can_withdraw: true,
    can_deposit: true,
    min_withdraw: null,
    max_withdraw: null,
    min_deposit: null,
    max_deposit: null,
    status: null,
    type: null,
    validation_address: null,
});
const route = useRoute();


const loader = ref(false);

const statuses = ref([
    { title: 'Active', id: 'active' },
    { title: 'InActive', id: 'inactive' },
    { title: 'Pending', id: 'pending' }
]);

const types = ref([
    { title: 'Crypto', id: 'crypto' },
    { title: 'Voucher', id: 'voucher' },
]);

const handleSubmit = async () => {
    try {
        loader.value = true;
        const formData = {
            name: form.value.name,
            symbol: form.value.symbol,
            network: form.value.network,
            min_withdraw: form.value.min_withdraw,
            max_withdraw: form.value.max_withdraw,
            min_deposit: form.value.min_deposit,
            max_deposit: form.value.max_deposit,
            status: form.value.status,
            type: form.value.type,
            validation_address: form.value.validation_address,
            can_withdraw: form.value.can_withdraw,
            can_deposit: form.value.can_deposit,
        };
        const { data } = await ApiService.post(`management/assets`, formData);

        if (data.status == "200") {
            router.push({ name: 'management-assets-index' });
        } else {
        }

        loader.value = false;
    } catch ({ response }) {
        loader.value = false;
        // validation_errros.value = response._data.data;
    }
};


onMounted(async () => {

});
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <v-skeleton-loader :elevation="9" :loading="loading" type="image">
                <UiParentCard>
                    <div>
                        <Form @submit="handleSubmit" ref="formRef">
                            <div class="grid grid-cols-12 gap-3">
                                <div class="col-span-12 md:col-span-6 lg:col-span-3">
                                    <Field mode="passive" name="name" v-slot="{ field }" rules="required"
                                        label="  Name">
                                        <v-text-field v-bind="field" v-model="form.name" label=" Name "
                                            variant="outlined" hide-details="auto"></v-text-field>
                                    </Field>
                                    <div class="invalid-feedback d-block">
                                        <ErrorMessage name="name" />
                                    </div>
                                </div>



                                <div class="col-span-12 md:col-span-6 lg:col-span-3">
                                    <Field mode="passive" name="symbol" v-slot="{ field }" rules="required"
                                        label="Symbol">
                                        <v-text-field v-bind="field" v-model="form.symbol" label="Symbol"
                                            variant="outlined" hide-details="auto"></v-text-field>
                                    </Field>
                                    <div class="invalid-feedback d-block">
                                        <ErrorMessage name="symbol" />
                                    </div>
                                </div>

                                <div class="col-span-12 md:col-span-6 lg:col-span-3">
                                    <Field mode="passive" name="network" v-slot="{ field }" rules="required"
                                        label="Network">
                                        <v-text-field v-bind="field" v-model="form.network" label="Network"
                                            variant="outlined" hide-details="auto"></v-text-field>
                                    </Field>
                                    <div class="invalid-feedback d-block">
                                        <ErrorMessage name="network" />
                                    </div>
                                </div>

                                <div class="col-span-12 md:col-span-6 lg:col-span-3">
                                    <Field mode="passive" name="validation_address" v-slot="{ field }" rules="required"
                                        label="Validation Address">
                                        <v-text-field v-bind="field" v-model="form.validation_address"
                                            label="Validation Address" variant="outlined"
                                            hide-details="auto"></v-text-field>
                                    </Field>
                                    <div class="invalid-feedback d-block">
                                        <ErrorMessage name="validation_address" />
                                    </div>
                                </div>


                                <div class="col-span-12 md:col-span-6 lg:col-span-3">
                                    <Field mode="passive" name="min_withdraw" v-slot="{ field }" rules="required"
                                        label="Min Withdraw">
                                        <v-text-field type="number" v-bind="field" v-model="form.min_withdraw"
                                            label="Min Withdraw" variant="outlined" hide-details="auto"></v-text-field>
                                    </Field>
                                    <div class="invalid-feedback d-block">
                                        <ErrorMessage name="min_withdraw" />
                                    </div>
                                </div>

                                <div class="col-span-12 md:col-span-6 lg:col-span-3">
                                    <Field mode="passive" name="max_withdraw" v-slot="{ field }" rules="required"
                                        label="Max Withdraw">
                                        <v-text-field type="number" v-bind="field" v-model="form.max_withdraw"
                                            label="Max Withdraw" variant="outlined" hide-details="auto"></v-text-field>
                                    </Field>
                                    <div class="invalid-feedback d-block">
                                        <ErrorMessage name="max_withdraw" />
                                    </div>
                                </div>

                                <div class="col-span-12 md:col-span-6 lg:col-span-3">
                                    <Field mode="passive" name="min_deposit" v-slot="{ field }" rules="required"
                                        label="Min Deposit">
                                        <v-text-field type="number" v-bind="field" v-model="form.min_deposit"
                                            label="Min Deposit" variant="outlined" hide-details="auto"></v-text-field>
                                    </Field>
                                    <div class="invalid-feedback d-block">
                                        <ErrorMessage name="min_deposit" />
                                    </div>
                                </div>

                                <div class="col-span-12 md:col-span-6 lg:col-span-3">
                                    <Field mode="passive" name="max_deposit" v-slot="{ field }" rules="required"
                                        label="Max Deposit">
                                        <v-text-field type="number" v-bind="field" v-model="form.max_deposit"
                                            label="Max Deposit" variant="outlined" hide-details="auto"></v-text-field>
                                    </Field>
                                    <div class="invalid-feedback d-block">
                                        <ErrorMessage name="max_deposit" />
                                    </div>
                                </div>




                                <div class="col-span-12 lg:col-span-6">

                                    <Field mode="passive" name="status" v-slot="{ field }" rules="required"
                                        label=" Status  ">
                                        <v-select variant="outlined" hide-details="auto" v-bind="field"
                                            label=" Status  " :items="statuses" item-title="title" item-value="id"
                                            v-model="form.status">
                                        </v-select>
                                    </Field>
                                    <div class="invalid-feedback d-block">
                                        <ErrorMessage name="status" />
                                    </div>
                                </div>

                                <div class="col-span-12 lg:col-span-6">

                                    <Field mode="passive" name="type" v-slot="{ field }" rules="required"
                                        label=" Type  ">
                                        <v-select variant="outlined" hide-details="auto" v-bind="field" label=" Type  "
                                            :items="types" item-title="title" item-value="id" v-model="form.type">
                                        </v-select>
                                    </Field>
                                    <div class="invalid-feedback d-block">
                                        <ErrorMessage name="type" />
                                    </div>
                                </div>

                                <div class="col-span-12">
                                    <div class="d-flex align-center">
                                        <CashBanknoteIcon size="22" stroke-width="1.5" class="mr-2" />
                                        <div class="ml-3">Can Withdraw</div>
                                        <div class="ml-auto"><v-switch v-model="form.can_withdraw" inset color="primary"
                                                hide-details></v-switch></div>
                                    </div>
                                </div>

                                <div class="col-span-12">
                                    <div class="d-flex align-center">
                                        <CashBanknoteIcon size="22" stroke-width="1.5" class="mr-2" />
                                        <div class="ml-3">Can Deposit</div>
                                        <div class="ml-auto"><v-switch v-model="form.can_deposit" inset color="primary"
                                                hide-details></v-switch>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-span-12">
                                    <v-btn type="submit" :loading="loader" class="submit-btn mt-2" flat
                                        color="primary">Save</v-btn>
                                </div>
                            </div>
                        </Form>
                    </div>
                </UiParentCard>
            </v-skeleton-loader>
        </v-col>
    </v-row>
</template>
