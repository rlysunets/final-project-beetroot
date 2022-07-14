import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    },
    {
        path: '/why-us',
        name: 'why-us',
        component: () => import('../views/WhyUs.vue')
    },
    {
        path: '/trips',
        name: 'trips',
        component: () => import('../views/Trips.vue')
    },
    {
        path: '/tours',
        name: 'tours',
        component: () => import('../views/Tours.vue')
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('../views/Contacts.vue')
    },
    {
        path: '/explores',
        name: 'explores',
        component: () => import('../views/Explores.vue')
    },
    {
        path: '/reviews',
        name: 'reviews',
        component: () => import('../views/Reviews.vue')
    },
    {
        path: '/quastions',
        name: 'quastions',
        component: () => import('../views/Quastions.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { 
            top: 0
        }
    },
})

export default router
