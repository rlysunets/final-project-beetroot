<template>
    <div class="contacts">
        <intro title="Contact us" bg="hero_contacts.jpg" />

        <section-wrapper hint="Contact" title="Get in touch">
            <Form />
        </section-wrapper>

        <cards-wrapper>
            <card v-for="(item, i) in addressData" :key="i" :img="item.img" :title="item.title" :descr="item.descr" />
        </cards-wrapper>

    </div>
</template>

<script>
import axios from "axios"
import Intro from "@/components/Intro.vue"
import SectionWrapper from "@/components/SectionWrapper.vue"
import Form from "@/components/Form.vue"
import CardsWrapper from '@/components/CardsWrapper.vue'
import Card from '@/components/Card.vue'
export default {
    name: "contacts",
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
    },
    components: {
        Intro,
        SectionWrapper,
        Form,
        CardsWrapper,
        Card
    }
}
</script>
