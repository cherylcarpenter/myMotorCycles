<template>
    <span>
        <home-hero></home-hero>
        <collection v-if="!showBikeDetails"></collection>
        <home-details
            v-if="showBikeDetails"
            :selected-bike="selectedBike"
        ></home-details>
    </span>
</template>

<script>
// Extensions
import View from '@/views/View';
import HomeHero from '@/views/sections/HomeHero';
import Collection from '@/views/sections/Collection';
import HomeDetails from '@/views/sections/HomeDetails';
import { EventBus } from '@/event-bus';
import appData from '@/mixins/app-data';

export default {
    name: 'Home',

    metaInfo: { title: 'Home' },
    extends: View,
    components: {
        HomeHero,
        Collection,
        HomeDetails,
    },

    props: {
        id: {
            type: String,
            default: 'home',
        },
    },
    mixins: {
        appData,
    },
    data: function () {
        return {
            showBikeDetails: false,
            selectedBike: 0,
        };
    },
    created() {
        EventBus.$on('showDetails', (index) => {

        });
        EventBus.$on('hideDetails', () => {
            this.showBikeDetails = false;
        });
    },
    methods: {
        getSelectedBike(index) {
            this.selectedBike = appData.bikes[index];
        },
    },
};
</script>
