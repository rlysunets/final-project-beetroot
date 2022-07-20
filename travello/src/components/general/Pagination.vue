<template>
    <nav>
        <ul class="pagination d-flex justify-content-center">
            <li class="page-item" :class="{'disabled': isDisabledFirst}">
                <a class="page-link" href="#" @click.prevent="goToPage(page-1)">Previous</a>
            </li>
            <template v-if="showFirst">
                <li class="page-item">
                    <a class="page-link" href="#" @click.prevent="goToPage(1)">1</a>
                </li>
                <li class="page-item">
                    <span>...</span>
                </li>
            </template>
            <li class="page-item" v-for="p in pageRange" :key="p" :class="{'active': p === page}">
                <a class="page-link" href="#" @click.prevent="goToPage(p)">{{ p }}</a>
            </li>
            <template v-if="showLast">
                <li class="page-item">
                    <span>...</span>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#" @click.prevent="goToPage(total)">{{ total }}</a>
                </li>
            </template>
            <li class="page-item" :class="{'disabled': isDisabledLast}">
                <a class="page-link" href="#" @click.prevent="goToPage(page+1)">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        page: {
            type: Number,
            default: 1,
            required: true
        },
        total: {
            type: Number,
            default: 0,
            required: true
        }
    },
    computed: {
        isDisabledFirst() {
            return this.page === 1
        },
        isDisabledLast() {
            return this.page === this.total
        },
        showFirst() {
            return this.page > 4 && this.total > 6
        },
        showLast() {
            return this.page < this.total - 3 && this.total > 6
        },
        pageRange() {
            let from = this.page - 2
            let to = this.page + 2
            if (this.page < 5) {
                from = 1
                to = 5
            }
            if (this.page > this.total - 4) {
                from = this.total - 4
                to = this.total
            }
            if (from < 1) {
                from = 1
            }
            if (to > this.total) {
                to = this.total
            }
            return Array(to - from + 1).fill().map((_, idx) => from + idx)
        }
    },
    methods: {
        goToPage(new_page) {
            this.$emit("goToPage", new_page)
        },
    }
}
</script>