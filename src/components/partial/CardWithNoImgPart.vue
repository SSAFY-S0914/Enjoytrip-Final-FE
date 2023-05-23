<template>
  <b-card
    border-variant="primary"
    :header="title"
    header-bg-variant="primary"
    header-text-variant="white"
    align="left"
    class="shadow bg-white rounded"
  >
    <b-card-text>
      <ul>
        <li>
          <span class="desc-title">그룹장</span>
          <span class="desc-content">{{ creator }}</span>
        </li>
        <li>
          <span class="desc-title">그룹원 수</span>
          <span class="desc-content">{{ cnt }}</span>
        </li>
      </ul>
    </b-card-text>

    <b-button variant="primary">가입하기</b-button>
  </b-card>
</template>

<script>
export default {
  name: "CardWithNoImg",
  props: ["title", "creator", "cnt", "url"],
};
</script>

<style scoped>
.desc-title {
  margin-right: 1rem;
  font-weight: 600;
}
</style>
