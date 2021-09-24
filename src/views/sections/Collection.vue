<template>
    <base-section id="collection" v-if="showCollection">
        <v-row justify="center" align="center" class="px-10">
            <v-col>
                <base-heading
                    class="font-weight-bold"
                    title="My Collection"
                    align="center" />
                <base-divider color="primary" align="center" maxWidth="200" />
                <base-body
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet mauris non venenatis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per."
                    align="center"
                    maxWidth="500"
                    marginX="auto"
                    useTheme
            /></v-col>
        </v-row>
        <v-row justify="center" align="center" class="px-10">
            <template v-for="(bike, index) in appData.bikes">
                <v-col :key="index" cols="12" sm="6" md="6">
                    <base-cycle-preview
                        class="pa-3"
                        v-bind="bike"
                        :index="index"
                    />
                </v-col>
            </template>
        </v-row>
    </base-section>
</template>

<script>
export default {
    name: 'SectionCollection',
    props: {
        showCollection: {
            type: Boolean,
            default: true,
        },
    },
};
</script>

<style lang="scss" scoped></style>
