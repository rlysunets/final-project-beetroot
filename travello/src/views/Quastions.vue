<template>
    <div class="questions">
        <section-wrapper title="Frequently asked questions" hint="Any more questions?">
            <div class="accordion_wrap">
                <div class="accordion_item" v-for="(item, i) in faqData" :key="i">
                    <accordion :question="item.question" :answer="item.answer" />
                </div>
            </div>
            <div class="ask">
                <div class="ask_question">Still have questions?</div>
                <div class="ask_button">
                    <my-button title="Contact us" :is-icon="true" @click="$router.push('/contacts')" />
                </div>
            </div>
        </section-wrapper>
    </div>
</template>

<script>
import axios from 'axios'
import SectionWrapper from '@/components/wrappers/SectionWrapper.vue'
import Accordion from '@/components/modules/Accordion.vue'
import MyButton from '@/components/general/MyButton.vue'

export default {
    name: "Questions",
    data() {
        return {
            faqData: []
        }
    },
    created() {
        axios
            .get("../data/faq.json")
            .then(resp => {
                this.faqData = resp.data
            })
    },
    components: {
    SectionWrapper,
    Accordion,
    MyButton
}
}
</script>

<style lang="scss" scoped>
.questions {
    padding-top: 50px;
}
.accordion_wrap {
    width: 700px;
    .accordion_item {
        margin-bottom: 30px;  
    }
}
.ask {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 50px;
    &_question {
        font-size: 18px;
        line-height: 24px;
        color: #2094E6;
    }
}
@media screen and (max-width: 750px) {
    .accordion_wrap {
        width: 500px;
    }
}
@media screen and (max-width: 540px) {
    .accordion_wrap {
        width: 350px;
    }
}
</style>