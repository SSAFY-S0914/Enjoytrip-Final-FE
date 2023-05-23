<template>
  <div>
    <HeaderLayout></HeaderLayout>
    <main class="container">
      <FilterSelection></FilterSelection>
      <SearchResult class="search-result"></SearchResult>
    </main>
    <FooterLayout></FooterLayout>
  </div>
</template>

<script>
import HeaderLayout from "@/components/layout/HeaderLayout.vue";
import FooterLayout from "@/components/layout/FooterLayout.vue";
import FilterSelection from "@/components/home/FilterSelection.vue";
import SearchResult from "@/components/home/SearchResult.vue";

export default {
  name: "HomeView",
  components: {
    HeaderLayout,
    FooterLayout,
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
