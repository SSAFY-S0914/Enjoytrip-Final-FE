<template>
  <div class="selection-part">
    <label for="category">{{ title }}</label>
    <b-form-select id="category" v-model="selected" :options="data.options"></b-form-select>
  </div>
</template>

<script>
export default {
  name: "SelectionPart",
  props: ["title", "data"],
  data() {
    return {
      selected: null,
    };
  },
  methods: {},
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
