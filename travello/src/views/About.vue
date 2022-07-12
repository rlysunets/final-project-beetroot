<template>
    <div>
        <intro title="About us" bg="hero_about.jpg" />

        <template v-for="(item, i) in exploreData">
            <explore :key="i" v-if="i === 1" :image1="item.image1" :image2="item.image2" :hint="item.hint"
                :title="item.title" :p1="item.p1" :p2="item.p2" />
        </template>

        <section-wrapper hint="About us" title="Why choose us">
            <cards-wrapper>
                <card v-for="(item, i) in whyUsCardsData" :key="i" :img="item.img" :title="item.title"
                    :descr="item.descr" />
            </cards-wrapper>
        </section-wrapper>

        <section-wrapper hint="About us" title="Numbers speaks louder" class="numbers_bg">
            <numbers />
        </section-wrapper>



    </div>
</template>

<script>
import axios from "axios"
import Intro from '@/components/Intro.vue'
import Explore from '@/components/Explore.vue'
import SectionWrapper from '@/components/SectionWrapper.vue'
import CardsWrapper from '@/components/CardsWrapper.vue'
import Card from '@/components/Card.vue'
import Numbers from '@/components/Numbers.vue'

export default {
    name: "About",
    data() {
        return {
            exploreData: [],
            whyUsCardsData: [],
        }
    },
    created() {
        axios
            .get("../data/explore.json")
            .then(resp => {
                this.exploreData = resp.data
            })
        axios
            .get("../data/whyUsCards.json")
            .then(resp => {
                this.whyUsCardsData = resp.data
            })

    },
    components: {
        Intro,
        Explore,
        SectionWrapper,
        CardsWrapper,
        Card,
        Numbers,
    }
}
</script>

<style lang="scss" scoped>
    .intro {
        margin-bottom: 60px;
    }
    .numbers_bg {
        background-color: #B1DAF6;
    }
</style>