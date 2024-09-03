<style lang="scss">
// @import 'bootstrap/scss/bootstrap.scss';
@import '@/scss/master.scss';
// ::v-deep .wwwwwww {
//     @import 'bootstrap/scss/bootstrap';
//     @import '@/scss/master.scss';
// }
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useCustomizerStore } from '../../stores/customizer';

const customizer = useCustomizerStore();
</script>
<template>
    <div class="wwwwwww">
        <!-----RTL LAYOUT------->
        <v-locale-provider v-if="customizer.setRTLLayout" rtl>
            <v-app :theme="customizer.actTheme">
                <RouterView />
            </v-app>
        </v-locale-provider>

        <!-----LTR LAYOUT------->
        <v-locale-provider v-else>
            <v-app :theme="customizer.actTheme">
                <RouterView />
            </v-app>
        </v-locale-provider>
    </div>
</template>
