<template>
  <div>
    <b-tabs content-class="mt-3" justified class="box-shadow pb-5">
      <b-tab title="관광지 검색" active>
        <form class="selection-tab">
          <DefaultSelection class="selection-tab__row"></DefaultSelection>
          <SearchBar class="selection-tab__row searchbar"></SearchBar>
        </form>
      </b-tab>
      <b-tab title="행사 검색">
        <form class="selection-tab">
          <DefaultSelection class="selection-tab__row"></DefaultSelection>
          <div class="selection-tab__row">
            <DateSelection :title="'시작일(필수)'" :datePickerId="'eventStartDate'"></DateSelection>
            <DateSelection :title="'종료일'" :datePickerId="'eventEndDate'"></DateSelection>
          </div>
        </form>
      </b-tab>
      <b-tab title="숙박 검색">
        <form class="selection-tab">
          <DefaultSelection class="selection-tab__row"></DefaultSelection>
        </form>
      </b-tab>
      <div class="search-btn">
        <b-button class="main-searchbar-btn" variant="secondary">검색</b-button>
      </div>
    </b-tabs>
  </div>
</template>

<script>
import DateSelection from "./DateSelection.vue";
import DefaultSelection from "./DefaultSelection.vue";
import SearchBar from "./SearchBar.vue";

export default {
  name: "FilterSelection",
  components: {
    DateSelection,
    DefaultSelection,
    SearchBar,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style scoped>
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
