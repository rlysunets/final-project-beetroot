<template>
    <div>
        <section class="reviews">
            <div class="container">
                <carousel v-if="reviewsData.length !==0" :settings="settings">
                    <slide v-for="(item) in reviewsData" :key="item">
                        <div class="reviews_wrap">
                            <div class="reviews_content">
                                <div class="review_hint hint">{{ item.hint }}</div>
                                <h2 class="reviews_title section_title">{{ item.title }}</h2>
                                <div class="reviews_descr">{{ item.descr }}</div>
                                <div class="reviews_button" v-if="button">
                                    <my-button title="All reviews" :is-icon="true" />
                                </div>
                            </div>
                            <div class="reviews_image">
                                <img class="img_border" :src="require('@/assets/images/reviews/' +item.image)"
                                    :alt="item.title">
                            </div>
                        </div>
                    </slide>
                    <template #addons>
                        <navigation />
                    </template>
                </carousel>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import MyButton from './MyButton.vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
    name: "Review",
    props: {
        button: {
            type: Boolean,
            default: true,
        }
    },
    data() {
        return {
            reviewsData: [],
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
                autoplay: 50000,
                transition: 2000,
                wrapAround: true,
            }
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
        MyButton,
        Carousel,
        Slide,
        Navigation
    },
}
</script>

<style lang="scss">
.reviews {
    padding-bottom: 60px;
    &_wrap {
        display: flex;
        justify-content: space-around;
        .reviews_content {
            text-align: left;
            flex-basis: 45%;
            padding: 10px 60px 10px 40px;
            .review_hint {
                margin-bottom: 10px;
            }
            .reviews_title {
                margin-bottom: 20px;
            }
            .reviews_descr {
                margin-bottom: 20px;
                font-family: 'Work Sans';
                font-weight: 400;
                font-size: 18px;
                line-height: 150%;
                color: #333333;
            }
        }
        .reviews_image {
            flex-basis: 45%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
.carousel__prev,
.carousel__next {
    background-color: #2194e6;
    &:hover {
        background-color: transparent;
        outline: 2px solid #2194e6;
        transition: all .3s ease;
        svg {
            fill: #2194e6;
        }
    }
}

@media screen and (max-width: 750px) {
    .reviews {
        &_wrap {
            flex-wrap: wrap;
            .reviews_content {
                flex-basis: 95%;
                padding: 0;
                .reviews_button {
                    margin-bottom: 20px;
                }
            }
            .reviews_image {
                flex-basis: 95%;
            }
        }
    }
}
@media screen and (max-width: 550px) {
    .carousel__prev,
    .carousel__next {
        display: none;
    }
}
</style>