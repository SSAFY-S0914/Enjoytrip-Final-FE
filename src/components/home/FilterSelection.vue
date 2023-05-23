<template>
  <div>
    <b-tabs content-class="mt-3" justified>
      <b-tab title="관광지 검색" pills active>
        <form class="selection-tab">
          <div class="selection-tab__row">
            <SelectionPart :data="contentType" :title="'카테고리'"></SelectionPart>
            <SelectionPart :data="areaCode" :title="'지역'"></SelectionPart>
            <SelectionPart :data="sigugunCode" :title="'시군구'"></SelectionPart>
          </div>
          <div class="selection-tab__row searchbar">
            <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
              <div class="input-group">
                <input
                  type="search"
                  placeholder="What're you searching for?"
                  aria-describedby="button-addon1"
                  class="form-control border-0 bg-light"
                />
              </div>
            </div>
          </div>
        </form>
      </b-tab>
      <b-tab title="행사 검색">
        <form class="selection-tab">
          <div class="selection-tab__row">
            <SelectionPart :data="contentType" :title="'카테고리'"></SelectionPart>
            <SelectionPart :data="areaCode" :title="'지역'"></SelectionPart>
            <SelectionPart :data="sigugunCode" :title="'시군구'"></SelectionPart>
          </div>
          <div class="selection-tab__row">
            <DateSelectionPart :title="'시작일(필수)'"></DateSelectionPart>
            <DateSelectionPart :title="'종료일'"></DateSelectionPart>
          </div>
        </form>
      </b-tab>
      <b-tab title="숙박 검색">
        <form class="selection-tab">
          <div class="selection-tab__row">
            <SelectionPart :data="contentType" :title="'카테고리'"></SelectionPart>
            <SelectionPart :data="areaCode" :title="'지역'"></SelectionPart>
            <SelectionPart :data="sigugunCode" :title="'시군구'"></SelectionPart>
          </div>
        </form>
      </b-tab>
    </b-tabs>
    <div class="search-btn">
      <b-button class="main-searchbar-btn" variant="secondary">검색</b-button>
    </div>
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

.input-group {
  width: 100%;
}

.form-control:focus {
  box-shadow: none;
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
