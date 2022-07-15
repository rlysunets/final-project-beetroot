<template>
    <!-- v-for="(item, i) in galleryData|| []" :key="i" -->
    <lightgallery :settings="{ speed: 500, plugins: plugins }">
        <!-- <a :href="require('@/assets/images/gallery/'+item.image)">
            <img :src="require('@/assets/images/gallery/'+item.image)" alt="image" />
        </a> -->
        <a href="../assets/images/gallery/gallery1.jpg">
            <img src="../assets//images/gallery/gallery1.jpg" alt="image" />
        </a>
        <!-- <a href="@/assets/images/gallery/image1.jpg">
            <img src="@/assets/images/gallery/image1.jpg" alt="image" />
        </a>
        <a href="@/assets/images/gallery/image1.jpg">
            <img src="@/assets/images/gallery/image1.jpg" alt="image" />
        </a> -->
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
        console.log(this.galleryData);
        axios
            .get("../data/gallery.json")
            .then(resp => {
                this.galleryData = resp.data
            })
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
