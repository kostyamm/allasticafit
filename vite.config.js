import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { VitePluginFonts } from 'vite-plugin-fonts'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

const options = {
    custom: {
        families: [
            {
                name: 'Montserrat',
                local: 'Montserrat',
                src: './src/assets/font/Montserrat-Regular.ttf',
            },
            {
                name: 'Montserrat',
                local: 'Montserrat',
                src: './src/assets/font/Montserrat-Bold.ttf',
            },
        ],
        display: 'swap',
        preload: true,
    },
}

export default defineConfig({
    server: {
        host: true,
        port: 3000,
        strictPort: true,
        open: true,
    },
    plugins: [
        vue(),
        VitePluginFonts(options),
        Components({
            resolvers: [
                IconsResolver({
                    prefix: false,
                }),
            ],
        }),
        Icons({
            scale: 2.2, // Scale of icons against 1em
            defaultStyle: '', // Style apply to icons
            defaultClass: '', // Class names apply to icons
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: [`@import "./src/assets/variables";`],
            },
        },
    },
})
