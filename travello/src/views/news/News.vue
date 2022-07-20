<template>
    <div class="news">
        <intro title="News" bg="hero_news.jpg" />

        <section-wrapper title="The latest travel news" hint="News">
            <div class="news_list">
                <div class="news_item" v-for="(item, i) in newsList" :key="i">
                    <router-link :to="{ name: 'oneNews', params: { title: item.title } }">
                        <div class="item_pic">
                            <img :src="item.urlToImage" :alt="item.title">
                        </div>
                        <div class="item_content">
                            <h2 class="title">{{ item.title }}</h2>
                            <time>{{ item.publishedAt }}</time>
                            <p class="descr">{{ item.description }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
            <!-- <pagination :page="page" :total="total" @goToPage="goToPage" /> -->
        </section-wrapper>
    </div>
</template>

<script>
import axios from 'axios'
import Intro from "@/components/sections/Intro.vue"
import SectionWrapper from '@/components/wrappers/SectionWrapper.vue'
import Pagination from '@/components/general/Pagination.vue'

export default {
    name: "News",
    data() {
        return {
            API_key: "76498ae586a94328ac5ccba99185f515",
            q: "tourism",
            newsList: [],
            page: 1,
            total: 0
        }
    },
    computed: {
        nowDateFormater() {
            const date = new Date()
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()
            return year+'-'+(month < 10 ? '0' + month : month)+'-'+(day < 10 ? '0'+day : day)
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            let url = `https://newsapi.org/v2/everything?q=${this.q}&apiKey=${this.API_key}`
            url += `&from=${this.nowDateFormater}`
            url += `&to=${this.nowDateFormater}`
            url += `&language=en`
            url += `&pageSize=20`
            url += `&page=${this.page}`
            axios
                .get(url)
                .then(resp => {
                    this.newsList = resp.data.articles
                })
        },
        goToPage(new_page) {
            this.page = new_page
            this.fetchData()
        }
    },
    components: {
        Intro,
        SectionWrapper,
        Pagination
    }
}
</script>

<style lang="scss" scoped>
.news_list {
    display: flex;
    flex-wrap: wrap;
    .news_item {
        padding: 20px;
        flex: 25%;
        display: flex;
        flex-direction: column;
        .item_pic {
            position: relative;
            padding-top: 50%;
            margin-bottom: 15px;
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
            .title{
                margin-bottom: 10px;
            }
            .descr {
                margin-top: 20px;
                text-align: justify;
                font-family: 'Work Sans';
                font-weight: 400;
                font-size: 20px;
                line-height: 150%;
                color: #333333;
            }
        }
    }
}
@media screen and (max-width: 992px) {
    .news_list {
        .news_item {
            flex: 33%;
        }
    }
}
@media screen and (max-width: 750px) {
    .news_list {
        .news_item {
            flex: 50%;
        }
    }
}
@media screen and (max-width: 550px) {
    .news_list {
        .news_item {
            flex: 100%;
        }
    }
}
</style>