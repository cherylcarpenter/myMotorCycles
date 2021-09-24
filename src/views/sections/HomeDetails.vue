<template>
    <v-container>
        <v-layout column>
            <v-flex class="display-2 text-xs-center my-5">{{
                appData.bikes[selectedBike].model
            }}</v-flex>
            <v-flex>
                <div class="subtitle-1">
                    <span>Manufacturer: </span
                    >{{ appData.bikes[selectedBike].manufacturer }}
                </div>
            </v-flex>
            <v-flex>
                <div class="subtitle-2">
                    <span>Power: </span>{{ appData.bikes[selectedBike].power }}
                </div>
                <div class="subtitle-2">
                    <span>Color: </span>{{ appData.bikes[selectedBike].color }}
                </div>
                <div class="subtitle-2">
                    <span>Displacement: </span
                    >{{ appData.bikes[selectedBike].displacement }}
                </div>
                <div class="subtitle-2 mb-6">
                    <span>Year: </span>{{ appData.bikes[selectedBike].year }}
                </div>
            </v-flex>
        </v-layout>
        <v-layout column>
            <v-row>
                <v-col>
                    <div>
                        <p class="mb-6 body-1">
                            {{ appData.bikes[selectedBike].description }}
                        </p>
                    </div>

                    <v-img
                        min-height="300"
                        :src="`${appData.bikes[selectedBike].img}`"
                    >
                    </v-img>

                    <v-row justify="center" align="center" class="mt-3 mb-3">
                        <v-btn @click="onClick()">Go Back</v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>
<script>
import { EventBus } from '@/event-bus';

export default {
    name: 'SectionHomeDetails',
    props: {
        selectedBike: Number,
    },
    methods: {
        onClick(index) {
            console.log('', index);
            EventBus.$emit('hideDetails');
        },
    },
};
</script>

<style lang="scss" scoped>
.body-1 {
    word-break: break-word;
}
</style>
