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
      :data="sigugunCodeSelection"
      :areaCode="selectedAreaCode"
      @selectItem="selectSigugunCode"
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
    ...mapState(productStore, ["sigugunCodeSelection"]),
    ...mapState(productStore, ["selectedAreaCode"]),
  },
  methods: {
    ...mapActions(productStore, ["setCategories"]),
    ...mapActions(productStore, ["setAreaCodes"]),
    ...mapActions(productStore, ["setSigugunCodes"]),
    ...mapMutations(productStore, ["CLEAR_SIGUGUNCODE_LIST"]),
    ...mapMutations(productStore, ["SET_SELECT_CONTENTTYPEID"]),
    ...mapMutations(productStore, ["SET_SELECT_AREACODE"]),
    ...mapMutations(productStore, ["SET_SELECT_SIGUGUNCODE"]),
    selectContentType(contentTypeId) {
      this.SET_SELECT_CONTENTTYPEID(contentTypeId);
    },
    selectAreaCode(areaCode) {
      this.CLEAR_SIGUGUNCODE_LIST();
      this.setSigugunCodes(areaCode);
      this.SET_SELECT_AREACODE(areaCode);
    },
    selectSigugunCode(sigugunCode) {
      this.SET_SELECT_SIGUGUNCODE(sigugunCode);
    },
  },
};
</script>

<style></style>
