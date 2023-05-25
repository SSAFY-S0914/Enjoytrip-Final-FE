<template>
  <div>
    <b-tabs content-class="mt-3" justified class="box-shadow pb-5" v-model="tabIndex">
      <KeywordSearchTab></KeywordSearchTab>
      <EventSearchTab></EventSearchTab>
      <StaySearchTab></StaySearchTab>
      <div class="search-btn">
        <b-button class="main-searchbar-btn" variant="secondary" @click="searchProduct"
          >검색</b-button
        >
      </div>
    </b-tabs>
  </div>
</template>

<script>
import KeywordSearchTab from "./SingleTabs/KeywordSearchTab.vue";
import EventSearchTab from "./SingleTabs/EventSearchTab.vue";
import StaySearchTab from "./SingleTabs/StaySearchTab.vue";

import { mapMutations, mapActions } from "vuex";

const productStore = "productStore";

export default {
  name: "FilterSelection",
  components: {
    KeywordSearchTab,
    EventSearchTab,
    StaySearchTab,
  },
  data() {
    return {
      tabIndex: 0,
    };
  },
  watch: {
    tabIndex() {
      this.CLREAR_ALL_SELECTED();
    },
  },
  created() {},
  methods: {
    ...mapMutations(productStore, ["CLREAR_ALL_SELECTED"]),
    ...mapActions(productStore, ["search"]),

    searchProduct() {
      this.search(this.tabIndex);
    },
  },
};
</script>

<style>
.selection-tab {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
}

.selection-tab__row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.searchbar {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.searchbar > div {
  width: 60%;
}

.search-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}

.main-searchbar-btn {
  width: 50%;
}
</style>
