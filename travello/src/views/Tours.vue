<template>
    <div class="tours">
        <intro title="Tours" bg="hero_tours.jpg" />

        <section-wrapper hint="About us" title="Gallery">
            <gallery />
        </section-wrapper>
    </div>
</template>

<script>
import Intro from "@/components/sections/Intro.vue"
import SectionWrapper from '@/components/wrappers/SectionWrapper.vue'
import Gallery from '@/components/modules/Gallery.vue'

export default {
    name: "Tours",
    components: {
        Intro,
        Gallery,
        SectionWrapper
    }

}
</script>

<style lang="scss">
</style>