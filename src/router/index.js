import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        component: () => import('@/layouts/base/Index.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/home/Index.vue'),
            },
        ],
    },
];
console.log(routes);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
        if (to.hash) return { selector: to.hash };
        if (savedPosition) return savedPosition;

        return { x: 0, y: 0 };
    },
    routes,
});

export default router;
