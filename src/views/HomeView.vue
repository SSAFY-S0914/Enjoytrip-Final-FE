<template>
  <div>
    <FilterTabs></FilterTabs>
    <SearchResult class="search-result"></SearchResult>
  </div>
</template>

<script>
import FilterTabs from "@/components/home/FilterTabs.vue";
import SearchResult from "@/components/home/SearchResult.vue";

export default {
  name: "HomeView",
  components: {
    FilterTabs,
    SearchResult,
  },
};
</script>

<style scooped>
.search-result {
  margin-top: 5rem;
}
</style>
