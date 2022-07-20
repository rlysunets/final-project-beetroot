<template>
    <div class="one_tour">
        <section-wrapper hint="About the place" :title="oneItem.city">
            <div class="item_pic">
                <img :src="require('@/assets/images/gallery/' + oneItem.img)" :alt="oneItem.city">
            </div>
            <div class="item_content">
                <div class="sidebar">
                    <div class="sidebar_block">
                        <div class="title">Destination</div>
                        <div class="content">
                            <div class="icon">
                                <img src="@/assets/images/marker.svg" alt="icon">
                            </div>
                            <div class="text">{{ oneItem.country }}</div>
                        </div>
                    </div>
                    <div class="sidebar_block">
                        <div class="title">Type</div>
                        <div class="content">
                            <div class="icon">
                                <img src="@/assets/images/marker.svg" alt="icon">
                            </div>
                            <div class="text">{{ oneItem.type }}</div>
                        </div>
                    </div>
                    <div class="sidebar_block">
                        <div class="title">Duration</div>
                        <div class="content">
                            <div class="icon">
                                <img src="@/assets/images/marker.svg" alt="icon">
                            </div>
                            <div class="text">{{ oneItem.duration }}</div>
                        </div>
                    </div>
                    <div class="sidebar_block">
                        <div class="title">Price</div>
                        <div class="content">
                            <div class="icon">
                                <img src="@/assets/images/marker.svg" alt="icon">
                            </div>
                            <div class="text">{{ oneItem.price }}</div>
                        </div>
                    </div>

                </div>
                <div class="about_tour">
                    <div class="hint">{{ oneItem.country }}</div>
                    <div class="section_title">{{ oneItem.city }}</div>
                    <p>{{ oneItem.descr.p1 }}</p>
                    <p>{{ oneItem.descr.p2 }}</p>
                    <p>{{ oneItem.descr.p3 }}</p>
                </div>
            </div>
            <ask title="Like this tour? Contact to book"/>
        </section-wrapper>
    </div>
</template>

<script>
import axios from 'axios'
import SectionWrapper from '@/components/wrappers/SectionWrapper.vue'
import Ask from '@/components/sections/Ask.vue'

export default {
    name: "OneTour",
    data() {
        return {
            oneItem: []
        }
    },
    created() {
        axios
            .get('../data/tours.json')
            .then(resp => {
                this.oneItem = resp.data.find(el => el.id === +this.$route.params.id)
                console.log(this.oneItem);
            })
    },
    components: {
        SectionWrapper,
        Ask
    },
}
</script>

<style lang="scss">
.one_tour {
    padding-top: 50px;
    .item_pic {
        margin-bottom: 120px;
        position: relative;
        padding-top: 50%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
    .item_content {
        display: flex;
        justify-content: space-between;
        gap: 60px;
        .sidebar {
            flex: 30%;
            padding: 40px;
            background-color: #B1DAF6;
            &_block {
                margin-bottom: 30px;
                .title {
                    font-size: 24px;
                    line-height: 32px;
                    color: #121212;
                    margin-bottom: 16px;
                }
                .content {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    .icon {

                    }
                    .text {
                        font-family: 'Work Sans';
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 130%;
                        color: #333333;
                    }
                }
            }
        }
        .about_tour {
            flex: 70%;
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
</style>