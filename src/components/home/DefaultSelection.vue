<template>
  <div>
    <SelectionPart
      :title="'카테고리'"
      :data="contentTypeSelection"
      @selectItem="selectContentType"
    ></SelectionPart>
    <SelectionPart
      :title="'지역'"
      :data="areaCodeSelection"
      @selectItem="selectAreaCode"
    ></SelectionPart>
    <SelectionPart
      :title="'시군구'"
      :data="sigunguCodeSelection"
      :areaCode="selectedAreaCode"
      @selectItem="selectSigunguCode"
    ></SelectionPart>
  </div>
</template>

<script>
import SelectionPart from "./SelectionPart.vue";
import { mapActions, mapMutations, mapState } from "vuex";

const productStore = "productStore";

export default {
  name: "DefaultSelection",
  components: {
    SelectionPart,
  },
  data() {
    return {};
  },
  created() {
    this.setCategories();
    this.setAreaCodes();
  },
  computed: {
    ...mapState(productStore, ["contentTypeSelection"]),
    ...mapState(productStore, ["areaCodeSelection"]),
    ...mapState(productStore, ["sigunguCodeSelection"]),
    ...mapState(productStore, ["selectedAreaCode"]),
  },
  methods: {
    ...mapActions(productStore, ["setCategories"]),
    ...mapActions(productStore, ["setAreaCodes"]),
    ...mapActions(productStore, ["setSigunguCodes"]),
    ...mapMutations(productStore, ["CLEAR_SIGUNGUCODE_LIST"]),
    ...mapMutations(productStore, ["SET_SELECT_CONTENTTYPEID"]),
    ...mapMutations(productStore, ["SET_SELECT_AREACODE"]),
    ...mapMutations(productStore, ["SET_SELECT_SIGUNGUCODE"]),
    selectContentType(contentTypeId) {
      this.SET_SELECT_CONTENTTYPEID(contentTypeId);
    },
    selectAreaCode(areaCode) {
      this.CLEAR_SIGUNGUCODE_LIST();
      this.setSigunguCodes(areaCode);
      this.SET_SELECT_AREACODE(areaCode);
    },
    selectSigunguCode(sigunguCode) {
      this.SET_SELECT_SIGUNGUCODE(sigunguCode);
    },
  },
};
</script>

<style></style>
