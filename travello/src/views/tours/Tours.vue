<template>
    <div class="tours">
        <intro title="Tours" bg="hero_tours.jpg" />

        <section-wrapper title="Popular Tour Destinations" hint="Perfect vacation">
            <div class="types">
                <span class="hint">Cultural</span>
                <span class="hint">Histoty</span>
                <span class="hint">Hike</span>
            </div>
            <tour-card />
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
    }

}
</script>

<style lang="scss">
.types {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    span {
        cursor: pointer;
    }
}
</style>