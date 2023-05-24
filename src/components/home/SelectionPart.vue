<template>
  <div class="selection-part">
    <label for="category">{{ title }}</label>
    <b-form-select
      id="category"
      v-model="selected"
      :options="data"
      @change="changeSelected"
    ></b-form-select>
  </div>
</template>

<script>
export default {
  name: "SelectionPart",
  props: ["title", "data", "areaCode"],
  data() {
    return {
      selected: null,
    };
  },
  watch: {
    areaCode() {
      this.selected = null;
    },
  },
  methods: {
    changeSelected() {
      this.$emit("selectItem", this.selected);
    },
  },
};
</script>

<style scoped>
.selection-part {
  display: flex;
  flex-direction: column;
  width: 30%;
}

select option[value="null"][disabled] {
  display: none;
}

select {
  height: 2.5rem;
}
</style>
