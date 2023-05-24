<template>
  <div>
    <FilterSelection></FilterSelection>
    <SearchResult class="search-result"></SearchResult>
  </div>
</template>

<script>
import FilterSelection from "@/components/home/FilterSelection.vue";
import SearchResult from "@/components/home/SearchResult.vue";

export default {
  name: "HomeView",
  components: {
    FilterSelection,
    SearchResult,
  },
};
</script>

<style scooped>
.search-result {
  margin-top: 5rem;
}
</style>
