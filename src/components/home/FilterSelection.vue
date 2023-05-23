<template>
  <div>
    <b-tabs content-class="mt-3" justified>
      <b-tab title="관광지 검색" active>
        <form class="selection-tab">
          <SelectionPart :data="contentType" :title="'카테고리'"></SelectionPart>
          <SelectionPart :data="areaCode" :title="'지역'"></SelectionPart>
          <SelectionPart :data="sigugunCode" :title="'시군구'"></SelectionPart>
        </form>
      </b-tab>
      <b-tab title="행사 검색">
        <form class="selection-tab">
          <SelectionPart :data="contentType" :title="'카테고리'"></SelectionPart>
          <SelectionPart :data="areaCode" :title="'지역'"></SelectionPart>
          <SelectionPart :data="sigugunCode" :title="'시군구'"></SelectionPart>
          <DateSelectionPart :title="'시작일(필수)'"></DateSelectionPart>
          <DateSelectionPart :title="'종료일'"></DateSelectionPart>
        </form>
      </b-tab>
      <b-tab title="숙박 검색">
        <form class="selection-tab">
          <SelectionPart :data="contentType" :title="'카테고리'"></SelectionPart>
          <SelectionPart :data="areaCode" :title="'지역'"></SelectionPart>
          <SelectionPart :data="sigugunCode" :title="'시군구'"></SelectionPart>
        </form>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import DateSelectionPart from "@/components/home/DateSelectionPart.vue";
import SelectionPart from "@/components/home/SelectionPart.vue";

export default {
  name: "FilterSelection",
  components: {
    SelectionPart,
    DateSelectionPart,
  },
  data() {
    return {
      contentType: {
        selected: null,
        options: [
          { value: null, text: "전체", selected: true },
          { value: "a", text: "This is First option" },
          { value: "b", text: "Selected Option" },
          { value: { C: "3PO" }, text: "This is an option with object value" },
        ],
      },
      areaCode: {
        selected: "areaCode",
        options: [
          { value: null, text: "전체", selected: true },
          { value: "a", text: "This is First option" },
          { value: "b", text: "Selected Option" },
          { value: { C: "3PO" }, text: "This is an option with object value" },
        ],
      },
      sigugunCode: {
        selected: "sigugunCode",
        options: [
          { value: null, text: "전체", selected: true },
          { value: "a", text: "This is First option" },
          { value: "b", text: "Selected Option" },
        ],
      },
    };
  },
};
</script>

<style scoped>
.selection-tab {
  margin-top: 3rem;
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.selection-tab div {
  flex: 1;
}
</style>
