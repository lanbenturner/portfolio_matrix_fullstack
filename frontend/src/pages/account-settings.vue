<script setup>
import { useRoute, useRouter } from 'vue-router'
import AccountSettingsAccount from '@/views/pages/account-settings/AccountSettingsAccount.vue'
import AccountSettingsBillingAndPlans from '@/views/pages/account-settings/AccountSettingsBillingAndPlans.vue'
import AccountSettingsConnections from '@/views/pages/account-settings/AccountSettingsConnections.vue'
import AccountSettingsNotification from '@/views/pages/account-settings/AccountSettingsNotification.vue'
import AccountSettingsSecurity from '@/views/pages/account-settings/AccountSettingsSecurity.vue'

const route = useRoute()
const router = useRouter()
// Default to 'account' tab if no tab is specified in the URL
const defaultTab = 'account'
const activeTab = ref(route.params.tab || defaultTab)

// Watch for changes in route params to update the active tab
watch(() => route.params.tab, (newTab) => {
  activeTab.value = newTab || defaultTab
})

// Ensure the URL is updated to reflect the default tab when none is specified
if (!route.params.tab) {
  router.replace({ name: 'account-settings', params: { tab: defaultTab } }).catch(err => {});
}
// tabs
const tabs = [
  {
    title: 'Account',
    icon: 'bx-user',
    tab: 'account',
  },
  {
    title: 'Security',
    icon: 'bx-lock-open-alt',
    tab: 'security',
  },
  {
    title: 'Billing & Plans',
    icon: 'bx-bookmark',
    tab: 'billing-plans',
  },
  {
    title: 'Notifications',
    icon: 'bx-bell',
    tab: 'notification',
  },
  {
    title: 'Connections',
    icon: 'bx-link',
    tab: 'connection',
  },
]
</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
      class="v-tabs-pill"
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'account-settings', params: { tab: item.tab } }"
      >
        <VIcon
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="mt-5 disable-tab-transition"
      :touch="false"
    >
      <!-- Account -->
      <VWindowItem value="account">
        <AccountSettingsAccount />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="security">
        <AccountSettingsSecurity />
      </VWindowItem>

      <!-- Billing -->
      <VWindowItem value="billing-plans">
        <AccountSettingsBillingAndPlans />
      </VWindowItem>

      <!-- Notification -->
      <VWindowItem value="notification">
        <AccountSettingsNotification />
      </VWindowItem>

      <!-- Connections -->
      <VWindowItem value="connection">
        <AccountSettingsConnections />
      </VWindowItem>
    </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: account-settings
</route>
