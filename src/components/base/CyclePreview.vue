<template>
    <v-hover #default="{ hover }">
        <v-card
            max-height="400"
            width="auto"
            class="px-auto"
            flat
            outlined
            tile
        >
            <v-img min-height="300" height="100%" :src="`${img}`">
                <v-fade-transition>
                    <div
                        v-if="hover"
                        class="
                            d-flex
                            transition-fast-in-fast-out
                            v-card--reveal
                            white--text
                            grey
                            lighten-3
                        "
                        style="height: 100%; opacity: 0.8"
                    >
                        <v-row justify="center" align="center">
                            <v-btn @click="onClick({ index })">Details</v-btn>
                        </v-row>
                    </div>
                </v-fade-transition>
            </v-img>
            <v-card-text class="pt-3" style="position: relative">
                <div class="font-weight-bold mb-2 text-left" v-text="model" />
            </v-card-text>
        </v-card>
    </v-hover>
</template>

<script>
import { EventBus } from '@/event-bus';

export default {
    name: 'BaseCyclePreview',

    props: {
        model: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        index: {
            type: Number,
        },
    },
    methods: {
        onClick(index) {
            console.log('clicked in preview', index);
            EventBus.$emit('showDetails', index);
        },
    },
};
</script>

<style lang="scss" scoped></style>
