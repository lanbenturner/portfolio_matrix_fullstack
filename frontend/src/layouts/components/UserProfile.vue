<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  // Clear the authentication tokens and user data from localStorage
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  localStorage.removeItem('userAbilities') // Remove this if you don't store abilities in localStorage

  // Redirect the user to the login page
  router.push('/login')
}
</script>

<template>
    <VAvatar
      class="cursor-pointer"
      color="on-primary"
      variant="tonal"
    >
      <VIcon
          icon="bx-user"
          size="25"
        />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VIcon
                  icon="bx-user"
                  size="25"
                />
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
              John Doe
            </VListItemTitle>
          </VListItem>

          <VDivider class="my-2" />

          <!-- 👉 Settings -->
          <VListItem to="/account-settings/account">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="bx-cog"
                size="22"
              />
            </template>

            <VListItemTitle>Settings</VListItemTitle>
          </VListItem>

          <!-- 👉 Support -->
          <VListItem link>
            <template #prepend>
              <VIcon
                class="me-2"
                icon="bx-help-circle"
                size="22"
              />
            </template>

            <VListItemTitle>Support</VListItemTitle>
          </VListItem>

          <!-- Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Logout -->
          <VListItem @click="logout">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="bx-log-out"
                size="22"
              />
            </template>

            <VListItemTitle>Logout</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
</template>
