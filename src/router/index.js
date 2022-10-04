import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/about',
      component: () => import('../views/AboutPage.vue')
    },
    {
      path: '/register',
      component: () => import('../views/RegisterPage.vue')
    },
    {
      path: '/sign-in',
      component: () => import('../views/SignInPage.vue')
    },
    {
      path: '/feed',
      component: () => import('../views/FeedPage.vue'),
      meta: {
        requiresAuth: true,
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(getAuth().currentUser) {
      next();
    } else {
      alert("You Don't have access")
      next('/');
    }
  } else {
    next();
  }
});

export default router