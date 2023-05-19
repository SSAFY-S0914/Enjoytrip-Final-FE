<template>
  <div>
    <HeaderLayout></HeaderLayout>
    <main class="container">
      <FilterSelection></FilterSelection>
      <SearchResult class="search-result"></SearchResult>
    </main>
  </div>
</template>

<script>
import HeaderLayout from "@/components/layout/HeaderLayout.vue";
import FilterSelection from "@/components/FilterSelection.vue";
import SearchResult from "@/components/SearchResult.vue";

export default {
  name: "HomeView",
  components: {
    HeaderLayout,
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
