<template>
    <div class="map">
        <l-map v-model="zoom" :center="[47.41322, -1.219482]" @move="log('move')">
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-control-layers />
            <l-polyline :lat-lngs="[
                [47.334852, -1.509485],
                [47.342596, -1.328731],
                [47.241487, -1.190568],
                [47.234787, -1.358337],
            ]" color="green"></l-polyline>
            <l-polygon :lat-lngs="[
                [46.334852, -1.509485],
                [46.342596, -1.328731],
                [46.241487, -1.190568],
                [46.234787, -1.358337],
            ]" color="#41B782" :fill="true" :fillOpacity="0.5" fillColor="#41B782" />
            <l-rectangle :lat-lngs="[
                [46.334852, -1.509485],
                [46.342596, -1.328731],
                [46.241487, -1.190568],
                [46.234787, -1.358337],
            ]" :fill="true" color="#35495D" />
            <l-rectangle :bounds="[
                [46.334852, -1.190568],
                [46.241487, -1.090357],
            ]">
                <l-popup> We are here </l-popup>
            </l-rectangle>
        </l-map>
    </div>
</template>

<script>
import {
    LMap,
    // LIcon,
    LTileLayer,
    // LMarker,
    LControlLayers,
    // LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
export default {
    name: "Map",
    components: {
        LMap,
        // LIcon,
        LTileLayer,
        // LMarker,
        LControlLayers,
        // LTooltip,
        LPopup,
        LPolyline,
        LPolygon,
        LRectangle,
    },
    data() {
        return {
            city: '',
            zoom: 2,
            iconWidth: 25,
            iconHeight: 40,
        }
    },
    props: {
        city: {
            type: String,
            reuired: true
        }
    },
    methods: {
        log(a) {
            console.log(a);
        },
        changeIcon() {
            this.iconWidth += 2;
            if (this.iconWidth > this.iconHeight) {
                this.iconWidth = Math.floor(this.iconHeight / 2);
            }
        },
    },
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>

<style lang="scss" scoped>
.map {
    height: 410px;
    padding: 10px;
}
</style>