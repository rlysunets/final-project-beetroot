<template>
    <div class="numbers_wrap">
        <div class="number" v-for="(item, i) in numbersData" :key="i">
            <div class="number_qty">
                <vue3-autocounter ref='counter' :startAmount='0' :endAmount='item.qty' :duration='3'
                    :autoinit="autoinit" />
            </div>
            <div class="number_descr">{{ item.title }}</div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Vue3Autocounter from 'vue3-autocounter';
export default {
    name: "Numbers",
    data() {
        return {
            numbersData: [],
            autoinit: true,
            scroll: 0 
        }
    },
    created() {
        // window.addEventListener("scroll", this.startCount)
        // console.log("created----", this.scroll);
        // this.pause()
        // this.autoinit = true
        // this.scroll = window.scrollY
        axios
            .get("../data/numbers.json")
            .then(resp => {
                this.numbersData = resp.data
            })
    },
    // methods: {
    //     start() {
    //         this.$refs.counter.start();
    //     },
    //     pause() {
    //         console.log("pause");
    //         this.$refs.counter.pause();
    //     },
    //     startCount() {
    //         this.scroll = window.scrollY
    //     }
    // },
    // watch: {
    //     scroll(value) {
    //         if (value > 1700) {
    //             console.log("watch----", this.scroll);
    //             this.autoinit = true
    //             this.start
    //         }
    //     }
    // },
    components: {
        Vue3Autocounter
    }

}
</script>

<style lang="scss">
.numbers_wrap {
    display: flex;
    justify-content: center;
    .number {
        padding: 0 30px;
        &_qty {
            text-align: center;
            font-family: 'Work Sans';
            font-weight: 500;
            font-size: 48px;
            line-height: 100%;
            color: #000000;
            margin-bottom: 20px;
        }
        &_descr {
            max-width: 140px;
            font-size: 24px;
            line-height: 120%;
            text-align: center;
            color: #000000;
        }
        &:not(:last-child) {
            border-right: 2px solid #2094E6;
        }
    }
}
</style>