<template>
    <div>
        <Header />
        <router-view />
        <Footer />

    </div>
</template>

<script>
import Header from "@/components/general/Header"
import Footer from "@/components/general/Footer"

export default {
    components: {
        Header,
        Footer
    }
}

</script>

<style>

</style>
