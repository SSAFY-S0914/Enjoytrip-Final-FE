<template>
  <div>
    <HeaderLayout></HeaderLayout>
    <main class="container">
      <router-view id="wrapper" />
    </main>
    <FooterLayout></FooterLayout>
  </div>
</template>

<script>
import HeaderLayout from "@/components/layout/HeaderLayout.vue";
import FooterLayout from "@/components/layout/FooterLayout.vue";

export default {
  name: "App",
  components: {
    HeaderLayout,
    FooterLayout,
  },
};
</script>

<style>
@import "@/assets/css/reset.css";
@import "@/assets/css/styles.css";
</style>
