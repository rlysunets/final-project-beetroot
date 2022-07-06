<template>
    <div>
        <section class="hero">
            <div class="container">
                <div class="hero_wrap">
                    <h2 class="hero_title">Explore new places with travello</h2>
                    <div class="hero_descr">
                        The Travello company has over 30 years of professional experience in the field of outbound
                        tourism and offers only high-quality tour products on the tourist market.
                    </div>
                    <!-- <div class="hero_button">
                        <button type="button" class="btn">Get started</button>
                    </div> -->

                    <!-- <MyButton /> -->
                    <my-button title="NE hello" icon="@/assets/images/arrow.svg"  />

                </div>
            </div>
        </section>
    </div>
</template>

<script>
import MyButton from './MyButton.vue';

export default {

    components: {
        MyButton
    }
}
</script>

<style lang="scss" scoped>
.hero {
    background-image: url(@/assets/images/home/hero.jpg);
    background-color: #2194e6;
    background-repeat: no-repeat;
    background-position: 70% 0;
    background-size: cover;
    &_wrap {
        max-width: 592px;
        padding: 240px 0 140px;
        color: #FFFFFF;
        .hero_title {
            font-weight: 600;
            font-size: 60px;
            line-height: 110%;
            margin-bottom: 25px;
        }
        .hero_descr {
            font-family: 'Work Sans';
            font-weight: 400;
            font-size: 18px;
            line-height: 150%;
            margin-bottom: 25px;
        }
    }
}
</style>