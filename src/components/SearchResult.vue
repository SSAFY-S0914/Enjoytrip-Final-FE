<template>
  <div>
    <h1>검색 결과</h1>
    <ListPart></ListPart>
  </div>
</template>

<script>
import ListPart from "./partial/ListPart.vue";

export default {
  name: "SearchResult",
  components: {
    ListPart,
  },
};
</script>

<style></style>
