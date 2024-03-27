import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

// Manually add or override the Account Settings route
const customRoutes = [
  {
    path: '/account-settings/:tab?',
    name: 'account-settings',
    component: () => import('@/pages/account-settings.vue'), // Ensure this path is correct
    // Other route options like meta, beforeEnter guards can go here
  },
  // Add other custom routes or modifications here
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts([...routes, ...customRoutes]), // Merge auto-generated routes with custom ones
});

export default router;
