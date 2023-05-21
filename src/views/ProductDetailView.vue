<template>
  <div>
    <HeaderLayout></HeaderLayout>
    <main class="container">
      <ProductDetailSection></ProductDetailSection>
      <CommentSection></CommentSection>
    </main>
    <FooterLayout></FooterLayout>
  </div>
</template>

<script>
import HeaderLayout from "@/components/layout/HeaderLayout.vue";
import FooterLayout from "@/components/layout/FooterLayout.vue";
import CommentSection from "@/components/CommentSection.vue";
import ProductDetailSection from "@/components/ProductDetailSection.vue";

export default {
  name: "ProductDetailView",
  components: {
    HeaderLayout,
    FooterLayout,
    ProductDetailSection,
    CommentSection,
  },
};
</script>

<style></style>
