<script>
import { toRef } from 'vue'
import TheLogo from '../TheLogo.vue'

export default {
    name: "SidePanel",
    components: { TheLogo },
    props: {
        modelValue: Boolean,
    },
    setup(props, { emit }) {
        const showPanel = toRef(props, 'modelValue')

        const onClose = () => emit('update:modelValue', false)

        return { showPanel, onClose }
    },
}
</script>

<template>
    <teleport to="body">
        <transition name="fade">
            <div v-if="showPanel" class="side-panel" @click.self="onClose">
                <div class="side-panel__header">
                    <TheLogo />
                    <span class="icon-button" @click="onClose">
                        <ant-design-left-circle-outlined />
                    </span>
                </div>
                <div class="side-panel__content">
                    <slot />
                </div>
            </div>
        </transition>
    </teleport>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(-200px);
}

$side-panel-width: 100vw;

.side-panel {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    max-width: $side-panel-width;
    background-color: $color--dark;

    &:after {
        position: absolute;
        content: ' ';
        left: $side-panel-width;
        top: 0;
        width: 100vw;
        height: 100vh;

        cursor: pointer;

        background-color: $color--dark;
        opacity: 0.8;
    }

    &__header {
        height: 80px;
        max-height: 80px;
        padding: 0 12px;
        margin-bottom: 12px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
            color: $color--white;
        }
    }

    &__content {
        padding: 0 12px;

        overflow-y: auto;
        height: calc(100vh - 76px);
    }
}
</style>