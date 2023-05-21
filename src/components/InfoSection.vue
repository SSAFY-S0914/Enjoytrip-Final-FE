<template>
  <div class="info-container">
    <InfoList class="info-list"></InfoList>
    <InfoDetail class="info-detail"></InfoDetail>
  </div>
</template>

<script>
import InfoList from "@/components/InfoList.vue";
import InfoDetail from "@/components/InfoDetail.vue";

export default {
  name: "InfoSection",
  components: {
    InfoList,
    InfoDetail,
  },
};
</script>

<style scoped>
.info-container {
  width: 100%;
  display: flex;
}

.info-list {
  width: 30%;
  margin-right: 2rem;
}

.info-detail {
  width: 70%;
  border: 1px solid black;
}
</style>
