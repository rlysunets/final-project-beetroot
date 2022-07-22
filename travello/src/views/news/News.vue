<template>
    <div class="news">
        <intro title="News" bg="hero_news.jpg" />

        <section-wrapper title="The latest travel news" hint="News">
            <div class="pagination">
                <button :class="{'disabled': page === 1}" @click="goToPrev">&#60;&#60;</button>
                <button v-for="p in totalPage" :key="p" :class="{'active': p === page}" @click="goToPage(p)">{{ p
                    }}</button>
                <button :class="{'disabled': page === totalPage}" @click="goToNext">&#62;&#62;</button>
            </div>

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
        </section-wrapper>
    </div>
</template>

<script>
import axios from 'axios'
import Intro from "@/components/sections/Intro.vue"
import SectionWrapper from '@/components/wrappers/SectionWrapper.vue'

export default {
    name: "News",
    components: {
        Intro,
        SectionWrapper
    },
    data() {
        return {
            // API_key: "76498ae586a94328ac5ccba99185f515",
            API_key: "1c05599a56d5486e85cd22b247e1bac8",
            q: "tourism",
            newsList: [],
            page: 1,
            totalPage: 5
        }
    },
    computed: {
        toDateFormater() {
            const date = new Date()
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()
            return year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
        },
        fromDateFormater() {
            const date = new Date()
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate() - 1
            return year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            let url = `https://newsapi.org/v2/everything?q=${this.q}&apiKey=${this.API_key}`
            url += `&from=${this.fromDateFormater}`
            url += `&to=${this.toDateFormater}`
            url += `&language=en`
            url += `&pageSize=18`
            url += `&page=${this.page}`
            axios
                .get(url)
                .then(resp => {
                    this.newsList = resp.data.articles
                })
        },
        goToPage(p) {
            this.page = p
            this.fetchData()
        },
        goToPrev() {
            if (this.page !== 1) {
                this.page = this.page - 1
                this.fetchData()
            }
        },
        goToNext() {
            if (this.page !== this.totalPage) {
                this.page = this.page + 1
                this.fetchData()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination {
    margin-bottom: 30px;
    padding-left: 20px;
    button {
        cursor: pointer;
        background-color: rgba(85, 183, 255, .6);
        color: #fff;
        border: 1px solid #fff;
        padding: 10px;
        &.disabled {
            background-color: lightgrey;
        }
        &.active {
            background-color: #2194e6;;
        }
    }
}
.news_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .news_item {
        padding: 20px;
        flex-basis: 33%;
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
                display: block;
            }
        }
        .item_content {
            padding: 10px;
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
        a:hover {
            display: block;
            box-shadow: 0px 7px 29px rgba(100, 100, 111, 0.2);
            transform: translateY(-20px);
            transition: all .3s ease-in;
        }
    }
    
}
@media screen and (max-width: 750px) {
    .news_list {
        .news_item {
            flex-basis: 50%;
        }
    }
}
@media screen and (max-width: 550px) {
    .news_list {
        .news_item {
            flex-basis: 100%;
        }
    }
}
</style>