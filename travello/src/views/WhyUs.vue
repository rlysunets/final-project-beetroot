<template>
    <div>
        <Intro title="Why choose us" bg="hero_why-choose-us.jpg" />
    </div>

    <faq>
        <template v-for="(item, i) in faqData">
            <accordion :key="i" v-if="i === 0" :question="item.question" :answer="item.answer" />
            <accordion :key="i" v-if="i === 1" :question="item.question" :answer="item.answer" />
            <accordion :key="i" v-if="i === 2" :question="item.question" :answer="item.answer" />
        </template>
    </faq>
</template>

<script>
import axios from 'axios'
import Intro from '@/components/Intro.vue'
import Accordion from '@/components/Accordion.vue'
import Faq from '@/components/Faq.vue'

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
        Accordion,
        Faq
    }
}
</script>

<style lang="scss" scoped>
</style>