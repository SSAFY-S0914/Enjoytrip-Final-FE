<template>
  <b-tab title="키워드 검색" active>
    <form class="selection-tab">
      <DefaultSelection class="selection-tab__row"></DefaultSelection>
      <SearchBar class="selection-tab__row searchbar"></SearchBar>
    </form>
  </b-tab>
</template>

<script>
import DefaultSelection from "../DefaultSelection.vue";
import SearchBar from "../SearchBar.vue";

export default {
  name: "KeywordSearchTab",
  props: ["title"],
  components: {
    DefaultSelection,
    SearchBar,
  },
};
</script>

<style></style>
