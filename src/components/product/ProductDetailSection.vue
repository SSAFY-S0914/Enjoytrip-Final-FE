<template>
  <div class="product-detail">
    <div class="product-detail-img">
      <img :src="productDetail.firstimage" alt="" />
    </div>
    <div class="product-detail-info">
      <div class="product-detail-btn">
        <b-button variant="danger"><i class="fa-regular fa-heart"></i></b-button>
      </div>
      <div class="product-detail-content">
        <span class="info-content__title">{{ productDetail.title }}</span>
      </div>
      <div class="product-detail-content">
        <span class="info-content__address">{{ productDetail.addr1 }}</span>
      </div>
      <div class="product-detail-content">
        <span class="info-content__contact">{{ productDetail.tel }}</span>
      </div>
      <div class="product-detail-content">
        <p class="info-content__overview">
          {{ productDetail.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

const productStore = "productStore";

export default {
  name: "ProductDetailSection",
  computed: {
    ...mapState(productStore, ["productDetail"]),
  },
  methods: {
    ...mapActions(productStore, ["searchDetail"]),
  },
  created() {
    console.log(this.$route.params.contentId);
    this.searchDetail(this.$route.params.contentId);
  },
};
</script>

<style scoped>
.product-detail {
  width: 100%;
  display: flex;
}

.product-detail-img,
.product-detail-info {
  width: 50%;
}

.product-detail-info {
  margin-left: 2rem;
}

.product-detail-img img {
  width: 100%;
}

.product-detail-btn {
  display: flex;
  justify-content: flex-end;
}

.product-detail-content {
  margin-bottom: 1.1rem;
}

.info-content__title {
  font-size: 2.5rem;
  font-weight: 600;
}
</style>
