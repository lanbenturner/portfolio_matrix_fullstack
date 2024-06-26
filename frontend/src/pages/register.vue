<script setup>
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import authV1BottomShape from '@images/svg/bottom-illustration.svg?raw'
import authV1TopShape from '@images/svg/top-illustration.svg?raw'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axiosIns from '@/plugins/axios'

const router = useRouter()

const form = ref({
  firstname: '',
  lastname: '',
  preferredname: '',
  email: '',
  password: '',
  privacyPolicies: false,
})

const isPasswordVisible = ref(false)

const register = async () => {
  try {
    const response = await axiosIns.post('register/', {
      first_name: form.value.firstname,
      last_name: form.value.lastname,
      preferred_name: form.value.preferredname,
      email: form.value.email,
      password: form.value.password,
      // Include any additional fields as required by your backend
    })

    // Handle successful registration (e.g., redirect or show a success message)
    router.push('/login')
  } catch (error) {
    console.error('Registration error:', error)
    // Handle errors (e.g., show an error message)
  }
}
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <div class="position-relative">
      <!-- 👉 Top shape -->
      <VNodeRenderer
        :nodes="h('div', { innerHTML: authV1TopShape })"
        class="text-primary auth-v1-top-shape d-none d-sm-block"
      />

      <!-- 👉 Bottom shape -->
      <VNodeRenderer
        :nodes="h('div', { innerHTML: authV1BottomShape })"
        class="auth-v1-bottom-shape d-none d-sm-block text-primary"
      />

      <VCard
        class="auth-card px-2"
        max-width="448"
      >
        <VCardItem class="justify-center">
          <template #prepend>
            <div class="d-flex">
              <VNodeRenderer :nodes="themeConfig.app.logo" />
            </div>
          </template>

          <!--
          <VCardTitle class="auth-title">
            {{ themeConfig.app.title }}
          </VCardTitle> -->
        </VCardItem>

        <VCardText>
          <h6 class="text-h6 mb-1 text-center">
            Register New User
          </h6>
          <p class="mb-0 text-center">
            Create your account
          </p>
        </VCardText>

        <VCardText>
          <VForm @submit.prevent="register">
            <VRow>
              <!-- First Name -->
              <VCol cols="12">
                <VTextField
                  v-model="form.firstname"
                  autofocus
                  label="First Name"
                />

              <!-- Last Name -->
                <VTextField
                  v-model="form.lastname"
                  autofocus
                  label="Last Name"
                  class="my-4"
                />

              <!-- Preferred Name -->
                <VTextField
                  v-model="form.preferredname"
                  autofocus
                  label="Preferred Name"
                  class="my-4"
                />

                <!-- email -->
                <VTextField
                  v-model="form.email"
                  label="Email"
                  type="email"
                  class="my-4"
                />

                <!-- password -->
                <VTextField
                  v-model="form.password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
                <div class="d-flex  align-center mt-2 mb-4 text-wrap">
                  <VCheckbox
                    id="privacy-policy"
                    v-model="form.privacyPolicies"
                    inline
                  />
                  <VLabel
                    for="privacy-policy"
                    style="opacity: 1;"
                  >
                    <span class="mx-1 text-wrap">I agree to
                      <a
                        href="javascript:void(0)"
                        class="text-primary"
                      >privacy policy & terms</a>
                    </span>
                  </VLabel>
                </div>

                <VBtn
                  block
                  type="submit"
                >
                  Sign up
                </VBtn>
              </VCol>

              <!-- login instead -->
              <VCol
                cols="12"
                class="d-flex justify-center flex-column flex-sm-row text-center text-base"
              >
                <span>Already have an account?</span>
                <RouterLink
                  class="text-primary ms-2"
                  to="/login"
                >
                  Sign in instead
                </RouterLink>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </div>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
