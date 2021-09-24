<template>
    <base-section id="home-hero" space="0">
        <v-img :src="backgroundImage" min-height="695px">
            <v-theme-provider dark>
                <v-container class="fill-height px-5 py-12">
                    <v-responsive
                        class="d-flex align-center justify-center"
                        height="100%"
                        width="99%"
                    >
                        <v-row align="center" class="offblack--text">
                            <v-col cols="12" md="6" class="hero-text">
                                <base-heading
                                    class="
                                        text-uppercase
                                        font-weight-bold
                                        offblack--text
                                    "
                                    :title="`${appData.title}`"
                                />
                                <base-subheading
                                    :title="`${appData.subTitle}`"
                                />
                                <base-body
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet mauris non venenatis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per."
                                    class="offblack--text"
                                    space="0"
                                />
                            </v-col>
                        </v-row>
                    </v-responsive>
                </v-container>
            </v-theme-provider>
        </v-img>
    </base-section>
</template>

<script>
export default {
    name: 'SectionHomeHero',
    data: () => ({
        backgroundImage: '../images/AdobeStock_113405276_Preview.jpeg',
    }),
};
</script>

<style lang="scss" scoped>
.hero-text {
    background: rgba(255, 255, 255, 0.37);
    padding: 2rem;
}
</style>
