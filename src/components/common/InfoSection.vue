<template>
  <div class="info-container">
    <InfoList class="info-list" :options="options"></InfoList>
    <div class="info-detail">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import InfoList from "@/components/common/InfoList.vue";

export default {
  name: "InfoSection",
  props: ["options"],
  components: {
    InfoList,
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
}
</style>
