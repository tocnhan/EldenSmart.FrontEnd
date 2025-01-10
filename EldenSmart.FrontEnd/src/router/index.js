// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Import component cho route
import About from '../views/About.vue'; // Import thêm các route khác

// Định nghĩa các route
const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
];

// Tạo router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;