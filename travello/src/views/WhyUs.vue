<template>
    <div class="why_us">
        <Intro title="Why choose us" bg="hero_why-choose-us.jpg" />

        <section-wrapper title="Benifits of Travello" hint="Benefits">
            <benefits />
        </section-wrapper>

        <div class="blue_bg">
            <review-carousel />
        </div>

        <faq>
            <template v-for="(item, i) in faqData">
                <accordion :key="i" v-if="i === 0" :question="item.question" :answer="item.answer" />
                <accordion :key="i" v-if="i === 1" :question="item.question" :answer="item.answer" />
                <accordion :key="i" v-if="i === 2" :question="item.question" :answer="item.answer" />
            </template>
        </faq>
    </div>
</template>

<script>
import axios from 'axios'
import Intro from '@/components/Intro.vue'
import SectionWrapper from '@/components/SectionWrapper.vue'
import Benefits from '@/components/Benefits.vue'
import ReviewCarousel from "@/components/ReviewCarousel.vue"
import Faq from '@/components/Faq.vue'
import Accordion from '@/components/Accordion.vue'

export default {
    name: "WhyUs",
    data() {
        return {
            faqData: []
        }
    },
    created() {
        axios
            .get("../data/faq.json")
            .then(resp => {
                this.faqData = resp.data
            })
    },
    components: {
        Intro,
        SectionWrapper,
        Benefits,
        ReviewCarousel,
        Accordion,
        Faq
    }
}
</script>

<style lang="scss" scoped>
</style>