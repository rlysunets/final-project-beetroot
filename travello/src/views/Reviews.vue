<template>
    <div>
        <section-wrapper title="Customer Reviews" hint="What they say">
            <div v-for="(item, i) in reviewsData" :key="i" class="mb">
                <review :image="item.image" :descr="item.descr" :name="item.name" :date="item.date" :button="false" />
            </div>
        </section-wrapper>
    </div>
</template>

<script>
import axios from 'axios'
import SectionWrapper from '@/components/SectionWrapper.vue';
import Review from '@/components/Review.vue';

export default {
    name: "Reviews",
    data() {
        return {
            reviewsData: []
        }
    },
    created() {
        axios
            .get("../data/reviews.json")
            .then(resp => {
                this.reviewsData = resp.data
            })
    },
    components: {
        SectionWrapper,
        Review
    }
}
</script>

<style lang="scss" scoped>
.mb {
    &:not(:last-child) {
        margin-bottom: 30px;
    }
}
</style>