<template>
  <div class="p-1 bg-light rounded rounded-pill shadow-sm">
    <div class="input-group">
      <input
        type="search"
        v-model="keyword"
        placeholder="What're you searching for?"
        aria-describedby="button-addon1"
        class="form-control border-0 bg-light"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

const productStore = "productStore";

export default {
  name: "SearchBar",
  data() {
    return { keyword: this.keyword };
  },
  computed: {
    ...mapState(productStore, ["keyword"]),
  },
  methods: {
    ...mapMutations(productStore, ["SET_KEYWORD"]),
  },
  watch: {
    keyword(newVal) {
      this.keyword = newVal;
      this.SET_KEYWORD(this.keyword);
    },
  },
};
</script>

<style scoped>
.input-group {
  width: 100%;
}

.form-control:focus {
  box-shadow: none;
}
</style>
