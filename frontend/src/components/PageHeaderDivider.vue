<template>
  <div class="header-divider">
    <!-- H1 Header Text -->
    <h1 class="header-title">{{ pageTitle }}</h1>

    <!-- Gradient Divider -->
    <GradientDivider :primaryColor="primaryColor" />
  </div>
</template>

<script>
import vuetifyTheme from '@/plugins/vuetify/theme'; // Import Vuetify theme
import GradientDivider from './GradientDivider.vue'; // Import the GradientDivider component

export default {
  components: {
    GradientDivider
  },
  props: {
    pageTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      primaryColor: vuetifyTheme.themes.light.colors.primary // Accessing the primary color from the theme
    };
  }
}
</script>

<style scoped>
.header-divider {
  display: flex;
  align-items: center; /* Center items vertically */
}

.header-title {
  white-space: nowrap; /* Prevent text from wrapping */
  margin-right: 20px; /* Add some spacing between the title and the divider */
}
</style>
