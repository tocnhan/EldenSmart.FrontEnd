// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Định nghĩa các route
let routes = [{
        path: '/',
        name: 'Home'
    },
    {
        path: '/login',
        name: 'LoginDeltail',
        component: () =>
            import ('@/views/Login/LoginDeltail.vue'),
    },
    {
        path: '/contact',
        name: 'ContactDeltail',
        component: () =>
            import ('@/views/contact/ContactDeltail.vue'),
    },
];

// Tạo router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;