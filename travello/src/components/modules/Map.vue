<!-- <template>
    <div class="map">
        <l-map ref="tempMap" style="width: 100%; height: 100%" :zoom="zoom" :center="center" :use-global-leaflet="true"
            @ready="onMapReady">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        </l-map>
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import HeatmapOverlay from "leaflet-heatmap";

export default {
    name: "App",
    components: {
        LMap,
        LTileLayer,
    },
    data() {
        return {
            zoom: 4,
            center: [51.505, -0.09],
            url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution:
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        };
    },
    methods: {
        onMapReady(map) {
            console.log(this.$refs.tempMap);
            var testData = {
                max: 8,
                data: [
                    { lat: 51.505, lng: -0.09, count: 3 },
                    { lat: 48.75, lng: -2.55, count: 1 },
                    { lat: 51.75, lng: -3.55, count: 7 },
                    { lat: 54.5, lng: -4.05, count: 5 },
                    { lat: 53.9, lng: 5.55, count: 3 },
                    { lat: 46.8, lng: 3.05, count: 4 },
                ],
            };
            var cfg = {
                // radius should be small ONLY if scaleRadius is true (or small radius is intended)
                // if scaleRadius is false it will be the constant radius used in pixels
                radius: 2,
                maxOpacity: 0.8,
                // scales the radius based on map zoom
                scaleRadius: true,
                // if set to false the heatmap uses the global maximum for colorization
                // if activated: uses the data maximum within the current map boundaries
                //   (there will always be a red spot with useLocalExtremas true)
                useLocalExtrema: true,
                // which field name in your data represents the latitude - default "lat"
                latField: "lat",
                // which field name in your data represents the longitude - default "lng"
                lngField: "lng",
                // which field name in your data represents the data value - default "value"
                valueField: "count",
            };
            var heatmapLayer = new HeatmapOverlay(cfg);
            heatmapLayer.setData(testData);

            heatmapLayer.addTo(map);
        },
    },
};
</script>

<style>
.map {
    height: 500px;
    width: 500px;
}
</style> -->
