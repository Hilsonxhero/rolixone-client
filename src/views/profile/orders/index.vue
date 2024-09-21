<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard>
                <v-data-table-server v-model:items-per-page="pager.per_page" :items-length="pager.total" page-text=""
                    :loading="table_loading" :headers="headers" :items="tableData" @update:options="loadItems">
                    <template v-slot:top>
                        <div flat class="flex items-center justify-between">

                            <div class="w-[40%] max-w-[70%]">
                                <v-text-field v-model="search" label="  Search  .." prepend-inner-icon="mdi-magnify"
                                    variant="outlined" hide-details single-line></v-text-field>
                            </div>

                            <div>

                                <!-- <v-btn :to="{ name: 'management-orders-create' }" class="me-2 text-none" flat
                                    color="primary" prepend-icon="mdi-plus" variant="flat">
                                    Create Asset
                                </v-btn> -->
                            </div>
                        </div>
                    </template>
                    <template v-slot:item.asset="{ item }">
                        <div>
                            <v-chip class="uppercase"> {{ item?.asset?.name }} </v-chip>
                        </div>
                    </template>

                    <template v-slot:item.outcome_currency="{ item }">
                        <div>
                            <v-chip class="uppercase"> {{ item?.outcome_currency }} </v-chip>
                        </div>
                    </template>

                    <template v-slot:item.tracking_code="{ item }">
                        <div>
                            <v-chip class="uppercase"> {{ item?.tracking_code }} </v-chip>
                        </div>
                    </template>
                    <template v-slot:item.amount="{ item }">
                        <div>
                            <v-chip class="uppercase"> {{ item?.amount }} $ </v-chip>
                        </div>
                    </template>

                    <template v-slot:item.status="{ item }">
                        <div>
                            <template v-if="item.status == 'waiting'">
                                <v-chip color="warning" class="uppercase"> {{ item?.status }} </v-chip>
                            </template>
                            <template v-else>
                                <v-chip color="success" class="uppercase"> {{ item?.status }} </v-chip>
                            </template>
                        </div>
                    </template>

                    <template v-slot:item.type="{ item }">
                        <div>
                            <div>

                                <template v-if="item?.type == 'deposit'">
                                    <v-chip color="primary" class="uppercase"> Deposit </v-chip>
                                </template>

                            </div>
                        </div>
                    </template>


                    <template v-slot:item.actions="{ item }">
                        <v-btn size="30" icon variant="flat" class="grey100">
                            <v-avatar size="22">
                                <DotsVerticalIcon size="20" color="grey100" />
                            </v-avatar>
                            <v-menu activator="parent">
                                <v-list>
                                    <v-list-item :link="true"
                                        :to="{ name: 'user-orders-detail', params: { id: item?.id } }" value="action"
                                        hide-details min-height="38">
                                        <v-list-item-title>
                                            <v-avatar size="20" class="mr-2">
                                                <component :is="NotebookIcon" stroke-width="2" size="20" />
                                            </v-avatar>
                                            Detail
                                        </v-list-item-title>
                                    </v-list-item>

                                </v-list>
                            </v-menu>
                        </v-btn>
                    </template>
                </v-data-table-server>
            </UiParentCard>
        </v-col>

        <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
                <v-card-title class="text-h5">
                    Are you sure you want to delete this item?
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">Delete</v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>


        <v-snackbar rounded="md" color="primary" class="mt-n3" v-model="visible_snackbar" location="top right"
            elevation="0">
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
    </v-row>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import ApiService from '@/services/ApiService';
import { useRoute } from 'vue-router';
import { PlusIcon, EditIcon, TrashIcon, CheckIcon, XIcon, ArrowBackUpIcon, NotebookIcon } from 'vue-tabler-icons';
import { useDebounceFn } from '@vueuse/core';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();


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

const editedIndex = ref(-1);
const editedItem = ref({});
const defaultItem = ref({});
const visible_snackbar = ref(false);
const snackbar_text = ref(null);
const dialogDelete = ref(false);

const headers = ref([
    { title: 'Asset', key: 'asset' },
    { title: 'Outcome Currency', key: 'outcome_currency' },
    { title: 'Amount', key: 'amount' },
    { title: 'Status', key: 'status' },
    { title: 'Type', key: 'type' },
    { title: 'Tracking Code', key: 'tracking_code' },

    { title: 'Actions', key: 'actions' }
]);

const tableData = ref([]);

const pager = ref({});
const current_page = ref(1);
const search = ref('');
const route = useRoute();
const table_loading = ref(true);
const fetchData = async () => {
    try {
        let params = {
            page: current_page.value,
            q: search.value
        };
        const { data } = await ApiService.query(`application/profile/orders`, {
            params: params
        });
        tableData.value = data.data.orders;
        pager.value = data.data.pager;
        table_loading.value = false;
    } catch (error) { }
};

const loadItems = ({ page, itemsPerPage, sortBy }) => {
    table_loading.value = true;
    current_page.value = page;
    fetchData();
};

const debouncedFn = useDebounceFn(() => {
    fetchData();
}, 300);
const handleOnSearch = () => {
    debouncedFn();
};

const deleteItem = (item: any) => {
    editedIndex.value = tableData.value.indexOf(item);
    editedItem.value = Object.assign({}, item);
    dialogDelete.value = true;
};
const deleteItemConfirm = async () => {
    try {
        const { data } = await ApiService.delete(`application/profile/orders/${editedItem.value.id}`);
        if (data.status == "200") {
            tableData.value.splice(editedIndex.value, 1);
            closeDelete();
            snackbar_text.value = 'The item has been successfully deleted';
            visible_snackbar.value = true;
        }
    } catch (error) { }
};
const closeDelete = () => {
    dialogDelete.value = false;
    nextTick(() => {
        editedItem.value = Object.assign({}, defaultItem.value);
        editedIndex.value = -1;
    });
};

watch(
    () => search.value,
    (val) => {
        if (val.trim() !== '') {
            handleOnSearch();
        } else {
            search.value = '';
            fetchData();
        }
    }
);

onMounted(() => {
    fetchData();
});
</script>
