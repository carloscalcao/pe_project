import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path:'/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path:'/emprego',
      name: 'emprego',
      component: () => import('../views/JobSearchView.vue')
    },
  ],
});

export default router;
