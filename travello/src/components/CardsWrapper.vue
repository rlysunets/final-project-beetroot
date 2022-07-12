<template>
    <section class="cards">
        <div class="container">
            <div class="cards_wrap">
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CardsWrapper"
}
</script>

<style lang="scss">
.cards {
    // padding-bottom: 60px;
    &_wrap {
        display: flex;
        justify-content: space-around;
        gap: 20px;
    }
}
</style>