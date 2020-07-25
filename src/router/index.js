import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const isLoggedIn = true;

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tasks',
        name: 'tasks-all',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "about" */ '@/views/tasks/TasksAll.vue'
            ),
        beforeEnter: (to, from, next) => {
            if (isLoggedIn) {
                next();
            } else {
                next({ name: 'login' });
            }
        }
    },
    {
        path: '/tasks/new',
        name: 'tasks-create',
        component: () => import('@/views/tasks/TasksCreate.vue'),
        beforeEnter: (to, from, next) => {
            if (isLoggedIn) {
                next();
            } else {
                next({ name: 'login' });
            }
        }
    },
    {
        path: '/tasks/:id',
        name: 'tasks-edit',
        component: () => import('@/views/tasks/TasksEdit.vue'),
        beforeEnter: (to, from, next) => {
            if (isLoggedIn) {
                next();
            } else {
                next({ name: 'Home' });
            }
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/authentication/Register.vue'),
        beforeEnter: (to, from, next) => {
            if (!isLoggedIn) {
                next();
            } else {
                next({ name: 'Home' });
            }
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/authentication/Login.vue'),
        beforeEnter: (to, from, next) => {
            if (!isLoggedIn) {
                next();
            } else {
                next({ name: 'login' });
            }
        }
    },
    {
        path: '*',
        redirect: '/'
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    linkActiveClass: 'active'
});

export default router;
