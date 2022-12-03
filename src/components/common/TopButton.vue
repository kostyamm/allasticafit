<script>
import { useScroll } from '../../hooks/useScroll.js'

export default {
    name: "TopButton",
    setup() {
        const { isScroll, toTop } = useScroll(100)

        return { isScroll, toTop }
    },
}
</script>

<template>
    <transition name="fade">
        <div v-show="isScroll" class="top-button" @click="toTop">
            <ant-design-arrow-up-outlined />
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(200px);
}

.top-button {
    position: fixed;
    z-index: 1000;
    height: 55px;
    width: 55px;
    right: 30px;
    bottom: 50px;
    background-color: $color--orange--accent;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 7px -2px $color--dark;
    cursor: pointer;

    svg {
        font-size: 14px;
        color: $color--white;
    }
}
</style>