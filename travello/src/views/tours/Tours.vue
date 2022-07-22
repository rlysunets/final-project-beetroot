<template>
    <div class="tours">
        <intro title="Tours" bg="hero_tours.jpg" />

        <section-wrapper title="Popular Tour Destinations" hint="Perfect vacation">
            <div class="types">
                <span class="hint" @click="setType('')">All</span>
                <span class="hint" @click="setType('Cultural')">Cultural</span>
                <span class="hint" @click="setType('Histoty')">Histoty</span>
                <span class="hint" @click="setType('Hike')">Hike</span>
            </div>
            <tour-card :type="type" />
        </section-wrapper>

        <section-wrapper hint="About us" title="Gallery">
            <gallery />
        </section-wrapper>
    </div>
</template>

<script>
import Intro from "@/components/sections/Intro.vue"
import SectionWrapper from '@/components/wrappers/SectionWrapper.vue'
import TourCard from '@/components/general/TourCard.vue'
import Gallery from '@/components/modules/Gallery.vue'

export default {
    name: "Tours",
    components: {
        Intro,
        TourCard,
        SectionWrapper,
        Gallery,
    },
    data() {
        return {
            type: ""
        }
    },
    methods: {
        setType(type) {
            this.type = type
        }
    }

}
</script>

<style lang="scss">
.types {
    display: flex;
    // justify-content: center;
    gap: 40px;
    margin-bottom: 20px;
    span {
        cursor: pointer;
    }
}
</style>