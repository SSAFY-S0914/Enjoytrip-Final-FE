<template>
  <div class="dateselection-part">
    <label :for="datePickerId">{{ title }}</label>
    <b-form-datepicker :id="datePickerId" v-model="value"></b-form-datepicker>
  </div>
</template>

<script>
export default {
  name: "DateSelectionPart",
  props: ["title", "datePickerId"],
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style scoped>
.dateselection-part {
  width: 40%;
}
</style>
