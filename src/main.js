import { createApp } from 'vue'
import { head } from './plugins/vueuse-head.js'
import App from './App.vue'
import './assets/style.scss'

const app = createApp(App)

app
    .use(head)
    .mount("#app")