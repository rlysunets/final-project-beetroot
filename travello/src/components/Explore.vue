<template>
    <section class="explore">
        <div class="container">
            <div class="explore_wrap">
                <div class="explore_photos">
                    <div class="pic">
                        <img class="img_border" :src="require('@/assets/images/explore/'+image1)" alt="photo">
                    </div>
                    <div class="pic_positioned">
                        <img class="img_border" :src="require('@/assets/images/explore/'+image2)" alt="photo">
                    </div>
                </div>
                <div class="explore_content">
                    <div class="explore_hint hint">{{ hint }}</div>
                    <h2 class="explore_title section_title">{{ title }}</h2>
                    <div class="explore_descr">
                        <p> {{ p1 }} </p>
                        <p> {{ p2 }} </p>
                    </div>
                    <div class="explore_button">
                        <my-button title="Get started" :is-icon="true" />
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
            required: true
        },
        image2: {
            type: String,
            default: "",
            required: true
        },
        hint: {
            type: String,
            default: "",
            required: true
        },
        title: {
            type: String,
            default: "",
            required: true
        },
        p1: {
            type: String,
            default: "",
            required: true
        },
        p2: {
            type: String,
            default: "",
        }
    },
    components: {
        MyButton
    } 
}
</script>

<style lang="scss">
.explore {
    padding-top: 120px;
    &_wrap {
        display: flex;
        .explore_photos {
            position: relative;
            flex-basis: 55%;
            .pic {
                max-width: 500px;
            }
            .pic_positioned {
                max-width: 386px;
                position: absolute;
                left: 30%;
                top: 40%;
            }
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .img_border {
            padding: 10px;
            border: 2px solid #E3DEC1;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .explore_content {
            flex-basis: 45%;
            padding: 20px 0 0 40px;
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
        padding-top: 60px;
        &_wrap {
            .explore_photos {
                flex-basis: 50%;
                .pic {
                    max-width: 100%;
                    margin-bottom: 20px;
                }
                .pic_positioned {
                    position: static;
                    max-width: 100%;
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