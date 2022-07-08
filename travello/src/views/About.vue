<template>
    <div>
        <intro title="About us" />
    </div>
</template>

<script>
import Intro from '../components/Intro.vue'
export default {
    components: {
        Intro
    },
}
</script>

<style lang="scss" scoped>

.intro {
    background-image: url(../assets/images/about/hero.jpg);
}

</style>