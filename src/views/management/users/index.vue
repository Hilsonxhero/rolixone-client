<template>

    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Basic Table">
                <Table1 />
            </UiParentCard>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

//Table
import Table1 from '@/components/table/Table1.vue';
const page = ref({ title: 'Basic Table' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Basic Table',
        disabled: true,
        href: '#'
    }
]);
</script>