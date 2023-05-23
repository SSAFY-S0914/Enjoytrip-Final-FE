<template>
  <div>
    <label for="date-picker">{{ title }}</label>
    <b-form-datepicker id="date-picker" v-model="value"></b-form-datepicker>
  </div>
</template>

<script>
export default {
  name: "DateSelectionPart",
  props: ["title"],
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style></style>
