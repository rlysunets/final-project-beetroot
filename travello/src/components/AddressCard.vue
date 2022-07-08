<template>
    <div class="container">
        <div class="address_cards">
            <div class="card" v-for="(item, i) in addressData" :key="i">
                <div class="card_icon">
                    <img :src="`./images/contacts/${item.icon}`" alt="">
                </div>
                <div class="card_title">{{ item.title }}</div>
                <div class="card_text">{{ item.text }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: "AddressCard",
    data() {
        return {
            addressData: []
        }
    },
    created() {
        axios
            .get("../data/address.json")
            .then(resp => {
                this.addressData = resp.data
            })
    }
}
</script>

<style lang="scss">
.address_cards {
    padding-bottom: 120px;
    display: flex;
    justify-content: center;
    gap: 20px;
    .card {
        flex-basis: 240px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        &_icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: #B1DAF6;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        &_title {
            font-size: 24px;
            line-height: 32px;
            color: #121212;
        }
        &_text {
            font-family: 'Work Sans';
            font-weight: 500;
            font-size: 16px;
            line-height: 120%;
            text-align: center;
            color: #333333;
            flex: 1 1 auto;
        }
    }
}
</style>