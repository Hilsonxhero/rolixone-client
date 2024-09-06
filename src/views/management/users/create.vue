<script setup lang="ts">
import { ref, onMounted, watchEffect, watch } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import ApiService from '@/services/ApiService';
import { useRoute } from 'vue-router';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { router } from '@/router';
import { useDebounceFn } from '@vueuse/core';
import { LockAccessIcon } from 'vue-tabler-icons';

const page = ref({ title: 'Edit user' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        to: { name: 'management-dashboard' }
    },
    {
        text: 'Users',
        disabled: false,
        to: { name: 'management-users-index' }
    },
    {
        text: 'Edit user',
        disabled: true,
        href: '#'
    }
]);
const formRef = ref<any>(null);
const loading = ref(false);
const permissions = ref([]);
const form = ref({
    email: null,
    username: null,
    role: null,
    status: "active",
    is_superuser: false
});
const route = useRoute();

const roles = ref([]);

const loader = ref(false);

const statuses = ref([
    { title: 'Active', id: 'active' },
    { title: 'InActive', id: 'inactive' },
    { title: 'Ban', id: 'ban' }
]);

const current_page = ref(1);
const roleSearchTerm = ref('');

const fetchRoles = async () => {
    try {
        let params = {
            page: current_page.value,
            q: roleSearchTerm.value
        };
        const { data } = await ApiService.query(`management/roles`, {
            params: params
        });
        roles.value = data.data.roles;
    } catch (error) { }
};

const debouncedFn = useDebounceFn(() => {
    fetchRoles();
}, 300);
const handleOnSearch = () => {
    debouncedFn();
};



const handleSubmit = async () => {
    try {
        loader.value = true;
        const formData = {
            username: form.value.username,
            email: form.value.email,
            status: form.value.status,
            is_superuser: form.value.is_superuser,

            // role_id: form.value.role?.id
        };
        const { data } = await ApiService.post(`management/users`, formData);

        if (data.status == "200") {
            router.push({ name: 'management-users-index' });
        } else {
        }

        loader.value = false;
    } catch ({ response }) {
        loader.value = false;
        // validation_errros.value = response._data.data;
    }
};
watch(
    () => roleSearchTerm.value,
    (val) => {
        if (val.trim() !== '') {
            handleOnSearch();
        } else {
            roleSearchTerm.value = '';
            fetchRoles();
        }
    }
);


onMounted(async () => {
    // await fetchRoles();
    // await fetchData();
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
                            <v-row>
                                <v-col cols="4">

                                    <Field mode="passive" name="username" v-slot="{ field }" rules="required"
                                        label="  Username">
                                        <v-text-field v-bind="field" v-model="form.username" label=" Username "
                                            variant="outlined" hide-details="auto"></v-text-field>
                                    </Field>
                                    <div class="invalid-feedback d-block">
                                        <ErrorMessage name="username" />
                                    </div>
                                </v-col>

                                <v-col cols="4">

                                    <Field mode="passive" name="email" v-slot="{ field }" rules="required"
                                        label="  Email">
                                        <v-text-field type="email" v-bind="field" v-model="form.email" label=" Email "
                                            variant="outlined" hide-details="auto"></v-text-field>
                                    </Field>
                                    <div class="invalid-feedback d-block">
                                        <ErrorMessage name="email" />
                                    </div>
                                </v-col>

                                <!-- <v-col cols="4">
                                    <v-label class="mb-2 font-weight-medium"> سطح دسترسی کاربر</v-label>

                                    <Field mode="passive" name="role" v-slot="{ field }" rules="required"
                                        label="سطح دسترسی کاربر">
                                        <v-select hide-details="auto" v-bind="field" single-line
                                            label="سطح دسترسی کاربر" :items="roles" item-title="title" return-object
                                            item-value="id" no-data-text="موردی وجود ندارد" v-model="form.role">
                                            <template v-slot:prepend-item>
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-text-field v-model="roleSearchTerm"
                                                            placeholder="جستجو"></v-text-field>
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
    <ErrorMessage name="role" />
</div>
</v-col> -->

                                <v-col cols="4">

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
                                </v-col>

                                <v-col cols="12">
                                    <div class="d-flex align-center">
                                        <LockAccessIcon size="22" stroke-width="1.5" class="mr-2" />
                                        <div class="ml-3">Access to Admin Panel</div>
                                        <div class="ml-auto"><v-switch v-model="form.is_superuser" inset color="primary"
                                                hide-details></v-switch></div>
                                    </div>
                                </v-col>


                                <v-col cols="12">
                                    <v-btn type="submit" :loading="loader" class="submit-btn mt-2" flat
                                        color="primary">Save</v-btn>
                                </v-col>
                            </v-row>
                        </Form>
                    </div>
                </UiParentCard>
            </v-skeleton-loader>
        </v-col>
    </v-row>
</template>
