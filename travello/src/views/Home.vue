<template>
    <div>
        <hero />

        <template v-for="(item, i) in exploreData">
            <explore :key="i" v-if="i === 0" :image1="item.image1" :image2="item.image2" :hint="item.hint"
                :title="item.title" :p1="item.p1" :p2="item.p2" />
        </template>
        
        <cards-wrapper>
            <card v-for="(item, i) in homeCardsData" :key="i" :img="item.img" :title="item.title" :descr="item.descr" />
        </cards-wrapper>

        <review-carousel />

        <travel />
    </div>
</template>

<script>
import axios from "axios"
import Hero from '@/components/Hero.vue'
import Explore from '@/components/Explore.vue'
import Card from "@/components/Card.vue"
import CardsWrapper from "@/components/CardsWrapper.vue"
import Travel from "@/components/Travel.vue"
import ReviewCarousel from "@/components/ReviewCarousel.vue"

export default {
    name: "Home",
    data() {
        return {
            exploreData: [],
            homeCardsData: []
        }
    },
    created() {
        axios
            .get("../data/explore.json")
            .then(resp => {
                this.exploreData = resp.data
            })

        axios
            .get("../data/homeCards.json")
            .then(resp => {
                this.homeCardsData = resp.data
            })
    },
    components: {
        Hero,
        Explore,
        Card,
        CardsWrapper,
        Travel,
        ReviewCarousel
    }
}
</script>

<style lang="scss" scoped>

</style>