<template>
    <v-app>
        <base-view />
    </v-app>
</template>

<script>
export default {
    name: 'BaseLayout',

    components: {
        BaseView: () => import('@/layouts/base/View'),
    },
};
</script>
