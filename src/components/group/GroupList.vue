<template>
  <div>
    <b-card-group deck>
      <SingleCard :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></SingleCard>
      <SingleCard :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></SingleCard>
      <SingleCard :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></SingleCard>
      <SingleCard :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></SingleCard>
      <SingleCard :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></SingleCard>
      <SingleCard :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></SingleCard>
      <SingleCard :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></SingleCard>
      <SingleCard :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></SingleCard>
      <SingleCard :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></SingleCard>
      <SingleCard :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></SingleCard>
      <SingleCard :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></SingleCard>
      <SingleCard :title="'그룹1'" :creator="'하정호'" :cnt="'5'" :url="'#'"></SingleCard>
    </b-card-group>
  </div>
</template>

<script>
import SingleCardwNoImgVue from "../common/SingleCardwNoImg.vue";

export default {
  name: "GroupList",
  components: {
    SingleCard: SingleCardwNoImgVue,
  },
};
</script>

<style scoped></style>
