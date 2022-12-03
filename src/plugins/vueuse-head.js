import { createHead } from '@vueuse/head'

const brand = 'Allasticafit'
const title = 'Студия растяжки и фитнеса в Праге'
const description = 'Начни путь к подтянутому телу'
const location = window?.location?.origin || ''
const previewImage = `${location}/preview.jpg`

export const head = createHead({
    title: `${brand} | ${title}`,
    meta: [
        { name: 'description', hid: 'description', property: 'description', content: description },
        { name: 'og:url', hid: 'og:url', property: 'og:url', content: location },
        { name: 'twitter:url', content: location },
        { name: 'twitter:domain', content: location },

        { name: 'og:locale', hid: 'og:locale', property: 'og:locale', content: 'ru_RU' },
        { name: 'og:type', hid: 'og:type', property: 'og:type', content: 'website' },
        { name: 'og:title', hid: 'og:title', property: 'og:title', content: title },
        { name: 'og:description', hid: 'og:description', property: 'og:description', content: description },
        { name: 'og:image', hid: 'og:image', property: 'og:image', content: previewImage },
        { name: 'og:image:width', hid: 'og:image:width', property: 'og:image:width', content: "968" },
        { name: 'og:image:height', hid: 'og:image:height', property: 'og:image:height', content: "504" },
        { property: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image:src', content: previewImage }
    ],
})
