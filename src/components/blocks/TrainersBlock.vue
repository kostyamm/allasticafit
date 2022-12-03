<script>
const TRAINERS = [
    { name: 'Алла', link: 'https://www.instagram.com/lala_2l2a/' },
    { name: 'Люда', link: 'https://www.instagram.com/sadsadok/' },
    { name: 'Лиза', link: 'https://www.instagram.com/lizataldykinaaa/' },
]

export default {
    name: "TrainersBlock",
    setup() {
        return { TRAINERS }
    },
}
</script>

<template>
    <div id="trainers" class="container container--spacing">
        <h2>Наши тренеры</h2>
        <p>
            В нашей студии работают специалисты с многолетним опытом,<br> чья жизнь всегда была связана со спортом.
            <br>
            И теперь своими знаниями мы хотим делиться и с вами.
        </p>

        <div class="row">
            <a
                v-for="{name, link} in TRAINERS"
                :key="link"
                :href="link"
                target="_blank"
                class="column trainer"
            >
                <div class="trainer__info">
                    <ant-design-instagram-outlined />
                    <div>{{ name }}</div>
                </div>
            </a>


        </div>
    </div>

</template>

<style lang="scss" scoped>
.trainer {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: end;

    padding: 24px;
    border-radius: $border-radius;

    max-height: 470px;
    height: 470px;
    width: 100%;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


    &__info {
        display: flex;
        align-items: center;
        position: relative;
        z-index: 20;
        color: $color--white;
        font-weight: 900;

        svg {
            margin-right: 8px;
            font-size: 14px;
        }
    }

    &:first-child {
        background-image: url("../../assets/images/trainer-alla.webp");
    }

    &:nth-child(2) {
        background-image: url("../../assets/images/trainer-luda.webp");
    }

    &:nth-child(3) {
        background-image: url("../../assets/images/trainer-liza.webp");
    }

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 10;
        content: ' ';
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0) 100%);
        border-radius: $border-radius;
    }
}
</style>