<template>
  <b-tab title="숙박 검색">
    <form class="selection-tab">
      <DefaultSelection class="selection-tab__row"></DefaultSelection>
    </form>
  </b-tab>
</template>

<script>
import DefaultSelection from "../DefaultSelection.vue";

export default {
  name: "StaySearchTab",
  components: {
    DefaultSelection,
  },
};
</script>

<style></style>
