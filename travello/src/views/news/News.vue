<template>
    
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            API_key: "76498ae586a94328ac5ccba99185f515",
            q: "travelling",
            newsList: [],
            page: 1
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
            url += `&sortBy=popularity`
            url += `&pageSize=20`
            url += `&page=${this.page}`
            axios
                .get(url)
                .then(resp => {
                    this.newsList = resp.data.articles
                })
        }
    }
}
</script>

<style>

</style>