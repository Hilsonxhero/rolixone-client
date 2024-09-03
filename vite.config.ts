import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import dotenv from 'dotenv'

// https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [
//         vue(),
//         vuetify({
//             autoImport: true,
//             styles: { configFile: 'src/scss/variables.scss' }
//         })
//     ],
//     resolve: {
//         alias: {
//             '@': fileURLToPath(new URL('./src', import.meta.url))
//         }
//     },
//     css: {
//         preprocessorOptions: {
//             scss: {}
//         }
//     },
//     optimizeDeps: {
//         exclude: ['vuetify'],
//         entries: ['./src/**/*.vue']
//     }
// });


export default () => {
    dotenv.config({ path: `./.env` });

    return defineConfig({

        plugins: [
            vue(),
            vuetify({
                autoImport: true,
                styles: { configFile: 'src/scss/variables.scss' }
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            }
        },
        css: {
            preprocessorOptions: {
                scss: {}
            }
        },
        optimizeDeps: {
            exclude: ['vuetify'],
            entries: ['./src/**/*.vue']
        },
        define: {
            'process.env': process.env
        }
    })
}
