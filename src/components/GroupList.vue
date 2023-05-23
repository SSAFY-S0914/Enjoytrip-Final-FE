<template>
  <div>
    <b-card-group deck>
      <CardVue :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></CardVue>
      <CardVue :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></CardVue>
      <CardVue :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></CardVue>
      <CardVue :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></CardVue>
      <CardVue :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></CardVue>
      <CardVue :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></CardVue>
      <CardVue :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></CardVue>
      <CardVue :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></CardVue>
      <CardVue :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></CardVue>
      <CardVue :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></CardVue>
      <CardVue :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></CardVue>
      <CardVue :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></CardVue>
    </b-card-group>
  </div>
</template>

<script>
import CardWithNoImgPartVue from "./partial/CardWithNoImgPart.vue";

export default {
  name: "GroupList",
  components: {
    CardVue: CardWithNoImgPartVue,
  },
};
</script>

<style scoped>
.card-deck {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
}
</style>
