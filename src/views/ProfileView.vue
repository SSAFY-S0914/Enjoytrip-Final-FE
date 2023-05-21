<template>
  <div>
    <HeaderLayout></HeaderLayout>
    <main class="container">
      <InfoSection></InfoSection>
    </main>
    <FooterLayout></FooterLayout>
  </div>
</template>

<script>
import HeaderLayout from "@/components/layout/HeaderLayout.vue";
import FooterLayout from "@/components/layout/FooterLayout.vue";
import InfoSection from "@/components/InfoSection.vue";

export default {
  name: "ProfileView",
  components: {
    HeaderLayout,
    FooterLayout,
    InfoSection,
  },
};
</script>

<style></style>
