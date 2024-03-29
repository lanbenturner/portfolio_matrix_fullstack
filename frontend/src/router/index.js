import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const customRoutes = [
  {
    path: '/account-settings/:tab?',
    name: 'account-settings',
    component: () => import('@/pages/account-settings.vue'),
    meta: { requiresAuth: true }, // Indicate that this route requires authentication
  },
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index.vue'),
    meta: { requiresAuth: true }, // Protect the index page
  },
  {
    path: '/second-page',
    name: 'second-page',
    component: () => import('@/pages/second-page.vue'),
    meta: { requiresAuth: true }, // Protect the second page
  },
  // Add other custom routes or modifications here
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts([...routes, ...customRoutes]),
});

// Global navigation guard to check for authentication
router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the user is logged in (e.g., by checking for an access token in localStorage)
    const isAuthenticated = localStorage.getItem('accessToken'); // Adjust the key according to your token storage

    if (!isAuthenticated) {
      // Redirect to the login page if not authenticated
      next({ name: 'Login' }); // Make sure you have a route named 'Login'
    } else {
      next(); // Proceed to the route if authenticated
    }
  } else {
    next(); // Proceed if the route does not require authentication
  }
});

export default router;
