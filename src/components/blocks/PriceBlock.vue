<script>
export default {
    name: "PriceBlock",
}
</script>

<template>
    <div id="price" class="price">
        <div class="container container--spacing">
            <h2>Цены на абонементы</h2>

            <div class="row">
                <div class="column">
                    <div class="price__card">
                        <h3>Пробная тренировка</h3>

                        <ul>
                            <li>Для записи на пробную тренировку нужно вносить предоплату 200кč</li>
                            <li>При отмене записи менее чем за 6 часов предоплата сгорает</li>
                        </ul>

                        <div class="price__card__price">200 кč</div>

                        <a href="https://forms.gle/YJDBsNzYSv8M2WUm8" target="_blank" class="link-button">Записаться</a>
                    </div>
                </div>
                <div class="column">
                    <div class="price__card">
                        <h3>Стоимость групповых тренировок</h3>

                        <div class="price__card__param">
                            <div class="price__card__param__prop">Разовая тренировка</div>
                            <div class="price__card__param__value">300 кč</div>
                        </div>
                        <div class="price__card__param">
                            <div class="price__card__param__prop">4 тренировки</div>
                            <div class="price__card__param__value">950 кč</div>
                        </div>
                        <div class="price__card__param">
                            <div class="price__card__param__prop">8 тренировок</div>
                            <div class="price__card__param__value">1800 кč</div>
                        </div>
                        <div class="price__card__param">
                            <div class="price__card__param__prop">12 тренировок</div>
                            <div class="price__card__param__value">2400 кč</div>
                        </div>
                        <div class="price__card__param">
                            <div class="price__card__param__prop">16 тренировок</div>
                            <div class="price__card__param__value">3100 кč</div>
                        </div>

                        <div class="price__card__param">
                            <div class="price__card__param__prop">Индивидуальная тренировка</div>
                            <div class="price__card__param__value">700 кč</div>
                        </div>
                        <div class="price__card__param">
                            <div class="price__card__param__prop">Парная тренировка</div>
                            <div class="price__card__param__value">900 кč</div>
                        </div>

                        <a href="https://forms.gle/YJDBsNzYSv8M2WUm8" target="_blank" class="link-button">Записаться</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.price {
    background-color: $color--gray;

    &__card {
        border-radius: $border-radius;
        background-color: $color--white;
        padding: 40px 30px;

        ul {
            opacity: 0.8;
            padding-inline-start: 16px;
            list-style-type: circle;

            li {
                margin-bottom: 4px;
                font-size: 14px;
            }
        }

        &__price {
            text-align: center;
            font-size: 32px;
            font-weight: 900;
            margin: 24px 0 12px;
        }

        &__param {
            border-bottom: 1px dotted $color--black;
            margin-bottom: 24px;

            &:after {
                content: '';
                display: table;
                clear: both;
            }

            &__prop {
                padding-right: 4px;
                float: left;
            }

            &__value {
                padding-left: 4px;
                float: right;
                font-weight: 900;
            }

            &__prop,
            &__value {
                margin-bottom: -.21em;
                background: $color--white;
                font-size: 24px;
            }
        }

        & h2 {
            text-align: center;
        }

        & ul {
            font-size: 18px;
        }
    }
}

@media #{$screen-mobile} {
    .price__card {
        padding: 32px 20px;

        &__price {
            font-size: 24px;
        }

        &__param {
            &__prop {
                font-size: 16px;
            }
            &__value {
                font-size: 18px;
            }
        }
    }
}
</style>