<template>
    <section class="travel">
        <section-wrapper title="What we offer" hint="Travel with us" descr="Families with children of different ages, tourists of the older generation, youth companies, couples
        in love and single travelers - for all categories we will offer quality and interesting rest.">
            <my-button title="Get started" :is-icon="true" />
        </section-wrapper>
    </section>
</template>

<script>
import MyButton from '@/components/general/MyButton.vue'
import SectionWrapper from '@/components/wrappers/SectionWrapper.vue'
export default {
    components: {
        SectionWrapper,
        MyButton
    },
}
</script>

<style lang="scss">

.travel {
    padding: 120px 0;
    background-image: url(@/assets/images/travel/travel.jpg);
    background-color: rgba(0, 0, 0, .6);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    .header_title {
        color: #fff;
    }
    .section_body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>