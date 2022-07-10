<template>
    <div>
        <hero />
        <template v-for="(item, i) in exploreData">
            <explore :key="i" v-if="i === 0" :image1="item.image1" :image2="item.image2" :hint="item.hint"
                :title="item.title" :p1="item.p1" :p2="item.p2" />
        </template>

    </div>
</template>

<script>
import axios from "axios"
import Hero from '@/components/Hero.vue'
import Explore from '@/components/Explore.vue'

export default {
    name: "Home",
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
                console.log(this.exploreData);
            })
    },
    components: {
        Hero,
        Explore
    }
}
</script>

<style>

</style>