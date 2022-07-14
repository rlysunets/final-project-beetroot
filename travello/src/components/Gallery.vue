<template>
    <lightgallery :settings="{ speed: 500, plugins: plugins }" :onInit="onInit" :onBeforeSlide="onBeforeSlide">
        <template v-for="(item, i) in galleryData" :key="i">
            <a :href="require('@/assets/images/gallery/'+item.image)">
                <img :src="require('@/assets/images/gallery/'+item.image)" alt="image" />
            </a>
        </template>
    </lightgallery>
</template>

<script>
import axios from 'axios'
import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

export default {
    name: "Gallery",
    data() {
        return {
            plugins: [lgThumbnail, lgZoom],
            galleryData: []
        }
    },
    created() {
        axios
            .get("../data/gallery.json")
            .then(resp => {
                this.galleryData = resp.data
            })
    },
    methods: {
        onInit: () => {
            console.log('lightGallery has been initialized');
        },
        onBeforeSlide: () => {
            console.log('calling before slide');
        },
    },
    components: {
        Lightgallery,
        lgThumbnail,
        lgZoom
    },
}
</script>

<style lang="css" scoped>
    @import 'lightgallery/css/lightgallery.css';
    @import 'lightgallery/css/lg-thumbnail.css';
    @import 'lightgallery/css/lg-zoom.css';
</style>
