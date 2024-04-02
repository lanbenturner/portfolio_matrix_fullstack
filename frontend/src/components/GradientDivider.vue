<template>
  <div class="gradient-divider" :style="{ background: gradientBackground }"></div>
</template>

<script>
export default {
  name: 'GradientDivider',
  props: {
    primaryColor: {
      type: String,
      required: true
    }
  },
  computed: {
    gradientBackground() {
      return `linear-gradient(to right, ${this.primaryColor}, transparent)`;
    }
  }
}
</script>

<style scoped>
.gradient-divider {
  height: 2px;
  width: 100%;
}
</style>
