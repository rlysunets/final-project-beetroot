<template>
    <div class="gallery">
        <div class="container">
            <div class="gallery_wrap">
                <lightgallery class="gallery" v-if="galleryData.length !== 0" :settings="{ plugins: plugins }">
                    <template v-for="(item, i) in galleryData" :key="i">
                        <a :href="require('@/assets/images/gallery/'+item.img)">
                            <img :src="require('@/assets/images/gallery/'+item.img)" :alt="item.alt" />
                        </a>
                    </template>
                </lightgallery>
            </div>
        </div>
    </div>
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
    components: {
        Lightgallery,
        lgThumbnail,
        lgZoom
    },
}
</script>

<style lang="scss" scoped>
@import 'lightgallery/css/lightgallery.css';
@import 'lightgallery/css/lg-thumbnail.css';
@import 'lightgallery/css/lg-zoom.css';
.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    a {
        flex-basis: 31%;
        max-height: 300px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
@media screen and (max-width: 992px) {
    .gallery {
        a {
            flex-basis: 48%;
        }
    }
}
@media screen and (max-width: 650px) {
    .gallery {
        a {
            flex-basis: 100%;
        }
    }
}
</style>
