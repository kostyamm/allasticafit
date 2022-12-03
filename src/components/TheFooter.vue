<script>
export default {
    name: "TheFooter",
}
</script>

<template>
    <div id="contacts" class="footer">
        <div class="container container--spacing">
            <h2>Контакты</h2>

            <div class="row">
                <div class="column">
                    <p class="footer__place">
                        <span>Филиал 1:</span>
                        <br>Praha 2, Fügnerovo náměstí 1866/5
                        <br>Метро I. P. Pavlova
                    </p>
                    <p class="footer__place">
                        <span>Филиал 2:</span>
                        <br>Praha 5, Nádražní 740/56
                        <br>Метро Smíchovské nádraží
                    </p>
                </div>
                <div class="column">
                    <p class="footer__contacts">
                        Instagram: <a href="https://www.instagram.com/allasticafit/">Allasticafit</a>
                        <br>Phone: <a href="tel:+420 608 388 457">+420 608 388 457</a>
                        <br>E-mail: <a href="mailto:allastica.agg@gmail.com">allastica.agg@gmail.com</a>
                    </p>
                </div>
            </div>

            <small>Copyright ©{{ new Date().getFullYear() }} Copyright by Allastica</small>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    background-color: $color--dark;
    color: $color--white;

    &__place {
        font-size: 24px;
        margin-bottom: 24px;

        span {
            font-size: 20px;
            opacity: 0.8;
        }
    }

    &__contacts {
        font-size: 22px;
        opacity: 0.8;
    }
}

@media #{$screen-mobile} {
    .footer {
        &__place {
            font-size: 22px;

            span {
                font-size: 18px;
            }
        }
    }
}
</style>