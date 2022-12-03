<script>
export default {
    name: "AboutBlock",
}
</script>

<template>
    <div id="about" class="container container--spacing">
        <h2>О направлениях</h2>

        <div class="row">
            <div class="column">
                <img src="../../assets/images/schedule-alla.webp" alt="Stretching">
                <h3>Stretching</h3>
                <p>
                    Спокойная обстановка на всех занятиях. При растяжке, мышцы получат значительную долю расслабления,
                    увеличится амплитуда движений, омоложение организма, ощущение легкости, гибкости и стройности.
                </p>
                <a href="https://forms.gle/YJDBsNzYSv8M2WUm8" target="_blank" class="link-button">Записаться</a>
            </div>
            <div class="column">
                <img src="../../assets/images/schedule-luda.webp" alt="Dancefit">
                <h3>Dancefit</h3>
                <p>
                    Зажигательная кардио тренировка, которая создана для тех, кому скучно выполнять физические
                    упражнения! Мы отлично совмещаем физические упражнения, танцы и музыку. Тело становится пластичным,
                    стройным и подтянутым.
                </p>
                <a href="https://forms.gle/YJDBsNzYSv8M2WUm8" target="_blank" class="link-button">Записаться</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.column {
    float: left;

    & img {
        width: 100%;
        border-radius: $border-radius;
    }
}
</style>