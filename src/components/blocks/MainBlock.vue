<script>
export default {
    name: "MainBlock",
}
</script>

<template>
    <div class="main-block">
        <div class="container">
            <h1>Студия растяжки и фитнеса в Праге</h1>
            <p>
                Начни путь к подтянутому телу
                <br>
                Один абонемент - два направления
            </p>
            <a href="https://forms.gle/YJDBsNzYSv8M2WUm8" target="_blank" class="link-button">Записаться</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: relative;
    z-index: 1;
    color: $color--white;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    p {
        color: $color--gray--darken;
    }
}

.main-block {
    position: relative;
    height: 100vh;
    width: 100%;

    background-image: url('../../assets/images/main-bg.webp');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color:rgba(0, 0, 0, .5);
    }
}
</style>