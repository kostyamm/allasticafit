<script setup>
import TheHeader from './components/TheHeader.vue'
import MainBlock from './components/blocks/MainBlock.vue'
import AboutBlock from './components/blocks/AboutBlock.vue'
import PriceBlock from './components/blocks/PriceBlock.vue'
import TrainersBlock from './components/blocks/TrainersBlock.vue'
import TheFooter from './components/TheFooter.vue'
import TopButton from './components/common/TopButton.vue'
</script>

<template>
    <TheHeader />
    <TopButton />
    <MainBlock />
    <AboutBlock />
    <PriceBlock />
    <TrainersBlock />
    <TheFooter />
</template>
