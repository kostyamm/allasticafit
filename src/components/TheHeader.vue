<script>
import { ref } from 'vue'
import { useBreakpoints } from '../hooks/useBreakpoints.js'
import SidePanel from './common/SidePanel.vue'
import TheLogo from './TheLogo.vue'
import InstIcon from '~icons/ant-design/instagram-outlined'
import PhoneIcon from '~icons/ant-design/phone-outlined'
import MailIcon from '~icons/ant-design/mail-outlined'

const LINKS = [
    { name: 'Направления', link: '/#about' },
    { name: 'Цены', link: '/#price' },
    { name: 'Тренеры', link: '/#trainers' },
    { name: 'Контакты', link: '/#contacts' },
]

const SOCIAL_LINKS = [
    { iconComponent: InstIcon, link: 'https://www.instagram.com/allasticafit/' },
    { iconComponent: PhoneIcon, link: 'tel:+420 608 388 457' },
    { iconComponent: MailIcon, link: 'mailto:allastica.agg@gmail.com' },
]

export default {
    name: "TheHeader",
    components: { TheLogo, SidePanel },
    setup() {
        const showPanel = ref(false)
        const { isMobile, isTablet } = useBreakpoints()

        const closePanel = () => showPanel.value = false

        return { LINKS, SOCIAL_LINKS, showPanel, closePanel, isMobile, isTablet }
    },
}
</script>

<template>
    <div class="header">
        <div class="container">
            <TheLogo />

            <ant-design-menu v-if="isTablet || isMobile" @click="showPanel = !showPanel" />
            <div v-else class="header__links">
                <a v-for="{name, link} in LINKS" :key="link" :href="link">{{ name }}</a>

                <a
                    v-for="{iconComponent, link} in SOCIAL_LINKS"
                    :key="link"
                    :href="link"
                    target="_blank"
                    class="header__links__icon"
                >
                    <component :is="iconComponent" />
                </a>
            </div>

            <SidePanel v-model="showPanel">
                <div class="header__links">
                    <a
                        v-for="{name, link} in LINKS"
                        :key="link"
                        :href="link"
                        @click="showPanel = !showPanel"
                    >
                        {{ name }}
                    </a>

                    <div>
                        <a
                            v-for="{iconComponent, link} in SOCIAL_LINKS"
                            :key="link"
                            :href="link"
                            target="_blank"
                            class="header__links__icon"
                            @click="showPanel = !showPanel"
                        >
                            <component :is="iconComponent" />
                        </a>
                    </div>
                </div>
            </SidePanel>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header {
    position: absolute;
    z-index: 1000;
    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;

    color: $color--white;

    &__links {
        display: flex;
        align-items: center;

        a {
            color: $color--white;
            margin-right: 24px;
        }

        &__icon {
            svg {
                font-size: 14px;
                color: $color--white;
            }

            &:not(:last-child) {
                margin-right: 12px;
            }
        }
    }
}

@media #{$screen-tablet} {
    .header__links {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: calc(100% - 160px);

        a {
            margin-bottom: 48px;
            font-size: 28px;
            font-weight: 900;
            margin-right: 0;
        }

        &__icon {
            margin-top: 12px;

            svg {
                font-size: 18px;
                color: $color--white;
            }

            &:not(:last-child) {
                margin-right: 32px;
            }
        }
    }
}
</style>