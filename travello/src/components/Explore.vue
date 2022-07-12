<template>
    <section class="explore">
        <div class="container">
            <div class="explore_wrap">
                <div class="explore_photos">
                    <div class="pic">
                        <img class="img_border" :src="require('@/assets/images/explore/'+image1)" :alt="title">
                    </div>
                    <div class="pic_positioned">
                        <img class="img_border" :src="require('@/assets/images/explore/'+image2)" :alt="title">
                    </div>
                </div>
                <div class="explore_content">
                    <div class="explore_hint hint">{{ hint }}</div>
                    <h2 class="explore_title section_title">{{ title }}</h2>
                    <div class="explore_descr">
                        <p> {{ p1 }} </p>
                        <p> {{ p2 }} </p>
                    </div>
                    <div class="explore_button" v-if="button">
                        <my-button title="Get started" :is-icon="true" @click="$router.push('/explores')" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import MyButton from './MyButton.vue'

export default {
    name: "Explore",
    props: {
        image1: {
            type: String,
            default: "",
            // required: true
        },
        image2: {
            type: String,
            default: "",
            required: true
        },
        hint: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        p1: {
            type: String,
            default: "",
            required: true
        },
        p2: {
            type: String,
            default: "",
        },
        button: {
            type: Boolean,
            default: true,
        }
    },
    components: {
        MyButton
    } 
}
</script>

<style lang="scss">

.explore {
    padding-bottom: 80px;
    &_wrap {
        display: flex;
        gap: 10%;
        .explore_photos {
            position: relative;
            flex-basis: 45%;
            .pic {
                max-width: 480px;
            }
            .pic_positioned {
                width: 380px;
                position: absolute;
                left: 30%;
                top: 40%;
            }
        }
        .explore_content {
            flex-basis: 45%;
            padding: 20px 0 0 60px;
            .explore_title {
                margin-bottom: 20px;
            }
            .explore_descr {
                margin-bottom: 20px;
                p {
                    font-family: 'Work Sans';
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 150%;
                    color: #333333;
                    &:not(:last-child) {
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 992px) {
    .explore {
        padding-bottom: 60px;
        &_wrap {
            gap: 0%;
            .explore_photos {
                flex-basis: 50%;
                .pic {
                    max-width: 100%;
                    margin-bottom: 20px;
                }
                .pic_positioned {
                    position: static;
                    width: 100%;
                }
            }
            .explore_content {
                flex-basis: 50%;
                padding: 0 0 0 20px;
            }
        }
    }
}

@media screen and (max-width: 800px) {
    .explore {
        &_wrap {
            flex-wrap: wrap;
            .explore_photos {
                flex-basis: 100%;
            }
            .explore_content {
                flex-basis: 100%;
                padding: 20px 0 0 0;
            }
        }
    }
}

</style>