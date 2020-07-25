import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

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
            import(/* webpackChunkName: "about" */ '@/views/tasks/TasksAll.vue')
    },
    {
        path: '/tasks/new',
        name: 'tasks-create',
        component: () => import('@/views/tasks/TasksCreate.vue')
    },
    {
        path: '/tasks/:id',
        name: 'tasks-edit',
        component: () => import('@/views/tasks/TasksEdit.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/authentication/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/authentication/Login.vue')
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
