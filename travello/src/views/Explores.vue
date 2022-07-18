<template>
    <div class="explores">
        <section-wrapper title="Explore world with us" hint="Explore">
            <template v-for="(item, i) in exploreData" :key="i">
                <explore :class="{ 'reverse': i % 2 !== 0 }" :image1="item.image1"
                    :image2="item.image2" :p1="item.p1" :p2="item.p2" :button="false" />
            </template>
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

<style lang="scss">
.explores {
    padding-top: 50px;
}
.reverse {
    flex-direction: row-reverse;
}
</style>