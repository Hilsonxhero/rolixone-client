<style lang="scss">
@import '@/scss/master.scss';
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from "@/layouts/app/header/header.vue"
import Footer from "@/layouts/app/footer/footer.vue"

</script>
<template>
    <div>
        <Header />

        <RouterView />

        <Footer />
    </div>
</template>
