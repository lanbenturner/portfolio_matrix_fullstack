<script>
import PageHeaderDivider from '@/components/PageHeaderDivider.vue';

export default {
  components: {
    PageHeaderDivider
  }
}
</script>

<template>
  <div>
    <PageHeaderDivider pageTitle="Your Page Title" />
    <VCard
      class="mb-6"
      title="Kick start your project 🚀"
    >
      <VCardText>All the best for your new project.</VCardText>
      <VCardText>
        Please make sure to read our <a
          href="https://themeselection.com/demo/sneat-vuetify-vuejs-admin-template/documentation"
          target="_blank"
          rel="noopener noreferrer"
          class="text-decoration-none"
        >
          Template Documentation
        </a> to understand where to go from here and how to use our template.
      </VCardText>
    </VCard>

    <VCard title="Want to integrate JWT? 🔒">
      <VCardText>We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.</VCardText>
      <VCardText>Please read our  JWT Documentation to get more out of JWT authentication.</VCardText>
    </VCard>
  </div>
</template>
