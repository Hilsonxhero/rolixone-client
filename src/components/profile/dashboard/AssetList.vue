<script setup lang="ts">
import { IconcardData } from '@/_mockApis/components/dashboard/dashboard3';
import { Icon } from '@iconify/vue';
import { ref, onMounted, watchEffect, watch } from 'vue';

import ApiService from '@/services/ApiService';
import { useRoute } from 'vue-router';


const loading = ref(false);

const route = useRoute();

const assets = ref([]);

const fetchData = async () => {
    try {
        const { data } = await ApiService.get(`application/profile/dashboard`);

        console.log("data", data);


        assets.value = data.data;

        loading.value = false;
    } catch (error) { }
};

onMounted(() => {
    fetchData()
})
</script>

<template>
    <v-card elevation="10" class="overflow-hidden">
        <v-card-item>
            <div class="grid grid-cols-12 gap-4">
                <div v-for="(asset, index) in assets" :key="index"
                    class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                    <v-sheet class="py-8 px-3 rounded-md text-center secondary-gradient">
                        <v-avatar size="48" color="secondary" class="rounded-md mb-3">
                            <Icon icon="ic:outline-backpack" height="25" />
                        </v-avatar>
                        <p class="mb-1 uppercase">{{ asset.name }}</p>
                        <h3 class="text-h3 heading mb-5">{{ asset.balance }}</h3>
                        <RouterLink :to="{ name: 'user-asset-detail', params: { id: asset?.id } }"
                            class="bg-surface mt-3 rounded-sm text-decoration-none text-body-2 font-weight-semibold btn-white elevation-9">
                            View Details</RouterLink>
                    </v-sheet>
                </div>
            </div>
        </v-card-item>
    </v-card>
</template>
