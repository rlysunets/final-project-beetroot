<template>
    <section class="section">
        <div class="container">
            <div class="section_wrapper">
                <div class="section_header">
                    <div class="header_hint hint">{{ hint }}</div>
                    <h2 class="header_title section_title">{{ title }}</h2>
                </div>
                <div class="section_body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SectionWrapper",
    props: {
        hint: {
            type: String,
            default: "",
            required: true
        },
        title: {
            type: String,
            default: "",
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.section {
    padding: 120px 0;
    &_wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        .section_header {
            text-align: center;
        }
    }
}
</style>