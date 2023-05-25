<template>
  <div>
    <h1>검색 결과({{ searchResult.totalCount }})</h1>
    <b-card-group deckd>
      <SingleCard
        v-for="(item, index) in searchResult.items.item"
        :key="index"
        :title="item.title"
        :src="item.firstimage"
        :text="item.addr1"
        :contentid="item.contentid"
      ></SingleCard>
    </b-card-group>
  </div>
</template>

<script>
import SingleCardwImgVue from "../common/SingleCardwImg.vue";

import { mapState } from "vuex";

const productStore = "productStore";

export default {
  name: "SearchResult",
  components: {
    SingleCard: SingleCardwImgVue,
  },
  computed: {
    ...mapState(productStore, ["searchResult"]),
  },
};
</script>

<style scoped>
.card-group {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
}
</style>
