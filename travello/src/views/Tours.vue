<template>
    <div class="tours">
        <intro title="Tours" />
    </div>
</template>

<script>
import Intro from "@/components/Intro.vue"
export default {
    name: "Tours",
    components: {
        Intro
    }

}
</script>

<style lang="scss">
.intro {
    background-image: url(../assets/images/tours/hero.jpg);
}
</style>