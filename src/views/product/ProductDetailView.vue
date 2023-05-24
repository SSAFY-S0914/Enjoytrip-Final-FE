<template>
  <div>
    <ProductDetail></ProductDetail>
    <CommentSection class="mt-5"></CommentSection>
  </div>
</template>

<script>
import CommentSection from "@/components/CommentSection.vue";
import ProductDetailSection from "@/components/product/ProductDetailSection.vue";

export default {
  name: "ProductDetailView",
  components: {
    ProductDetail: ProductDetailSection,
    CommentSection,
  },
};
</script>

<style></style>
