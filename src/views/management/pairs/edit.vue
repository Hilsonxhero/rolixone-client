<script setup lang="ts">
import { ref, onMounted, watchEffect, watch } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import ApiService from '@/services/ApiService';
import { useRoute } from 'vue-router';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { router } from '@/router';
import { useDebounceFn } from '@vueuse/core';
import { CarouselVerticalIcon } from 'vue-tabler-icons';

const page = ref({ title: 'Create Asset Pair' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        to: { name: 'management-dashboard' }
    },
    {
        text: 'Asset Pairs',
        disabled: false,
        to: { name: 'management-pairs-index' }
    },
    {
        text: 'Create Asset Pair',
        disabled: true,
        href: '#'
    }
]);

const formRef = ref<any>(null);
const loading = ref(false);
const form = ref({
    asset_from: null,
    asset_to: null,
    fee: null,
    status: null,
    is_common_display: true,
});
const route = useRoute();

const assets = ref([])
const current_page = ref(1);
const assetsearchTerm = ref('')

const fetchAssets = async () => {
    try {
        let params = {
            page: current_page.value,
            q: assetsearchTerm.value
        };
        const { data } = await ApiService.query(`management/asset/select`, {
            params: params
        });
        assets.value = data.data;
    } catch (error) { }
};

const debouncedFn = useDebounceFn(() => {
    fetchAssets();
}, 300);
const handleOnSearch = () => {
    debouncedFn();
};

watch(
    () => assetsearchTerm.value,
    (val) => {
        if (val.trim() !== '') {
            handleOnSearch();
        } else {
            assetsearchTerm.value = '';
            fetchAssets();
        }
    }
);

const loader = ref(false);
const visible_snackbar = ref(false);
const snackbar_text = ref(null);
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
            asset_from: form.value.asset_from?.id,
            asset_to: form.value.asset_to?.id,
            fee: form.value.fee,
            status: form.value.status,
            is_common_display: form.value.is_common_display,
        };
        const { data } = await ApiService.put(`management/asset/pairs/${route.params.id}`, formData);

        if (data.status == "200") {
            router.push({ name: 'management-pairs-index' });
        } else {
            snackbar_text.value = 'The asset pair you are trying to create already exists';
            visible_snackbar.value = true;
        }

        loader.value = false;
    } catch ({ response }) {
        loader.value = false;
        // validation_errros.value = response._data.data;
    }
};

const fetchData = async () => {
    try {
        const { data } = await ApiService.get(`management/asset/pairs/${route.params.id}`);
        form.value.asset_from = data.data.from;
        form.value.asset_to = data.data.to;
        form.value.fee = data.data.fee;
        form.value.status = data.data.status;
        form.value.is_common_display = data.data.is_common_display;
        loading.value = false;
    } catch (error) { }
};
watchEffect(() => {
    if (formRef.value) {
        formRef.value.setValues({
            ...form.value
        });
    }
});



onMounted(async () => {
    await fetchAssets();
    await fetchData();
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
                                    <Field mode="passive" name="asset_from" v-slot="{ field }" rules="required"
                                        label="Asset From">
                                        <v-select hide-details="auto" v-bind="field" label="Asset From" :items="assets"
                                            item-title="name" return-object item-value="id" v-model="form.asset_from">
                                            <template v-slot:prepend-item>
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-text-field v-model="assetsearchTerm"
                                                            placeholder="Search"></v-text-field>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-divider class="mt-2"></v-divider>
                                            </template>
                                            <template v-slot:item="{ props, item }">
                                                <v-list-item v-bind="props"></v-list-item>
                                            </template>
                                        </v-select>
                                    </Field>
                                    <div class="invalid-feedback d-block">
                                        <ErrorMessage name="asset_from" />
                                    </div>
                                </div>

                                <div class="col-span-12 md:col-span-6 lg:col-span-3">
                                    <Field mode="passive" name="asset_to" v-slot="{ field }" rules="required"
                                        label="Asset To">
                                        <v-select hide-details="auto" v-bind="field" label="Asset To" :items="assets"
                                            item-title="name" return-object item-value="id" v-model="form.asset_to">
                                            <template v-slot:prepend-item>
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-text-field v-model="assetsearchTerm"
                                                            placeholder="Search"></v-text-field>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-divider class="mt-2"></v-divider>
                                            </template>
                                            <template v-slot:item="{ props, item }">
                                                <v-list-item v-bind="props"></v-list-item>
                                            </template>
                                        </v-select>
                                    </Field>
                                    <div class="invalid-feedback d-block">
                                        <ErrorMessage name="asset_to" />
                                    </div>
                                </div>



                                <div class="col-span-12 md:col-span-6 lg:col-span-3">

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

                                <div class="col-span-12 md:col-span-6 lg:col-span-3">
                                    <Field mode="passive" name="fee" v-slot="{ field }" rules="required" label="Fee">
                                        <v-text-field type="number" max="100" v-bind="field" v-model="form.fee"
                                            label="Fee" variant="outlined" hide-details="auto"></v-text-field>
                                    </Field>
                                    <div class="invalid-feedback d-block">
                                        <ErrorMessage name="fee" />
                                    </div>
                                </div>



                                <div class="col-span-12">
                                    <div class="d-flex align-center">
                                        <CarouselVerticalIcon size="22" stroke-width="1.5" class="mr-2" />
                                        <div class="ml-3">Common Display</div>
                                        <div class="ml-auto"><v-switch v-model="form.is_common_display" inset
                                                color="primary" hide-details></v-switch>
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

    <v-snackbar rounded="md" color="error" class="mt-n3" v-model="visible_snackbar" location="top right" elevation="0">
        <div class="d-flex gap-2">
            <InfoCircleIcon size="22" />
            <div class="">
                <h5 class="text-body-1">Alert</h5>
                <p class="text-12"> {{ snackbar_text }}!</p>
            </div>
        </div>
        <template v-slot:actions>
            <v-btn variant="text" @click="visible_snackbar = false">
                <XIcon />
            </v-btn>
        </template>
    </v-snackbar>
</template>
