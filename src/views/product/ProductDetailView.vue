<template>
  <div>
    <HeaderLayout></HeaderLayout>
    <main class="container">
      <ProductDetail></ProductDetail>
      <CommentSection class="mt-5"></CommentSection>
    </main>
    <FooterLayout></FooterLayout>
  </div>
</template>

<script>
import HeaderLayout from "@/components/layout/HeaderLayout.vue";
import FooterLayout from "@/components/layout/FooterLayout.vue";
import CommentSection from "@/components/CommentSection.vue";
import ProductDetailSection from "@/components/product/ProductDetailSection.vue";

export default {
  name: "ProductDetailView",
  components: {
    HeaderLayout,
    FooterLayout,
    ProductDetail: ProductDetailSection,
    CommentSection,
  },
};
</script>

<style></style>
