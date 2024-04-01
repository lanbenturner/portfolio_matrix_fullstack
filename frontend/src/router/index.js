import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const customRoutes = [
  {
    path: '/account-settings/:tab?',
    name: 'account-settings',
    component: () => import('@/pages/account-settings.vue'),
    meta: { requiresAuth: true }, // Marking this route as requiring authentication
  },
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index.vue'),
    meta: { requiresAuth: true }, // Protecting the home page
  },
  {
    path: '/second-page',
    name: 'second-page',
    component: () => import('@/pages/second-page.vue'),
    meta: { requiresAuth: true }, // Another protected route
  },
  // Include any other custom routes you might have here
];

// Setup routes with layouts and include customRoutes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts([...routes, ...customRoutes]), // Merging auto-generated routes with custom routes
});

// Global beforeEach navigation guard for authentication checks
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Attempting to retrieve the authentication token from localStorage
    const isAuthenticated = localStorage.getItem('accessToken'); // Ensure this key matches how you store your token

    if (!isAuthenticated) {
      // If no token found, redirect to the login page
      next({ name: 'login' }); // Adjust this to match your login route's name
    } else {
      // If a token is found, proceed to the requested route
      next();
    }
  } else {
    // If the route does not require authentication, proceed as normal
    next();
  }
});

export default router;
