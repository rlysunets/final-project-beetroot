<template>
    <div>
        <section-wrapper title="Explore world with us" hint="Explore">
            <div v-for="item in exploreData" :key="item">
                <explore :image1="item.image1" :image2="item.image2" :p1="item.p1" :p2="item.p2" :button="false" />
            </div>
        </section-wrapper>
    </div>
</template>

<script>
import axios from "axios"
import Explore from '@/components/Explore.vue'
import SectionWrapper from '@/components/SectionWrapper.vue'

export default {
    name: "Explores",
    data() {
        return {
            exploreData: []
        }
    },
    created() {
        axios
            .get("../data/explore.json")
            .then(resp => {
                this.exploreData = resp.data
            })
    },
    components: {
    Explore,
    SectionWrapper
}
}
</script>

<style lang="scss" scoped>

</style>