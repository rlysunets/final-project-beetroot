<template>
    <div>
        <section class="reviews" v-for="(item, i) in reviewsData" :key="i">
            <div class="container">
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
                        <img class="img_border" :src="require('@/assets/images/reviews/' +item.image)" :alt="item.title">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import MyButton from './MyButton.vue'

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
        MyButton
    },
}
</script>

<style lang="scss">
.reviews {
    padding-bottom: 120px;
    &_wrap {
        display: flex;
        .reviews_content {
            flex-basis: 50%;
            padding: 10px 120px 10px 0;

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
            flex-basis: 50%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>