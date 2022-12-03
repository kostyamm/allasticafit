import { computed, onMounted, onUnmounted, ref } from 'vue'

const DEFAULT_VALUE = 500

export const useScroll = (checkValue = DEFAULT_VALUE) => {
    const windowScrollY = ref(window.scrollY)

    const toTop = () => window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })

    const onScroll = () => windowScrollY.value = window.scrollY

    const isScroll = computed(() => windowScrollY.value >= checkValue)

    onMounted(() => window.addEventListener('scroll', onScroll))
    onUnmounted(() => window.removeEventListener('scroll', onScroll))

    return { isScroll, toTop }
}