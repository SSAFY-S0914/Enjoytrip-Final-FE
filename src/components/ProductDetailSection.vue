<template>
  <div class="product-detail">
    <div class="product-detail-img">
      <img
        src="https://images.unsplash.com/photo-1682686580922-2e594f8bdaa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        alt=""
      />
    </div>
    <div class="product-detail-info">
      <div class="product-detail-btn">
        <b-button variant="danger"><i class="fa-regular fa-heart"></i></b-button>
      </div>
      <div class="product-detail-content">
        <span class="info-content__title">K-핸드메이드페어 2023</span>
      </div>
      <div class="product-detail-content">
        <span class="info-content__address">서울특별시 강남구 영동대로 513</span>
      </div>
      <div class="product-detail-content">
        <span class="info-content__contact">02-761-2512</span>
      </div>
      <div class="product-detail-content">
        <p class="info-content__overview">
          'K-핸드메이드페어'는 국내 최대 핸드메이드 페어로서, 올해로 14회차를 맞이하고 있다.<br />아티스트와
          소비자 간의 교류의 장으로서의 역할을 하며 핸드메이드 산업의 동향을 파악할 수 있다.
          <br />출품 업체 및 작가들은 주요 타겟 및 바이어와의 소통을 통한 효과적인 프로모션이
          가능하다. <br />각종 트렌디한 핸드메이드 완제품뿐 만 아니라, DIY KIT, 각종 부자재/재료를
          한 자리에서 만나볼 수 있고, 공예 체험을 해볼 수 있는 공간도 마련될 예정이다.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetailSection",
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
