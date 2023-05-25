<template>
  <b-tab title="행사 검색">
    <form class="selection-tab">
      <DefaultSelection class="selection-tab__row"></DefaultSelection>
      <div class="selection-tab__row">
        <div class="dateselection-part">
          <label for="eventStartDate">시작일(필수)</label>
          <b-form-datepicker id="eventStartDate" v-model="eventStartDate"></b-form-datepicker>
        </div>
        <div class="dateselection-part">
          <label for="eventEndDate">종료일</label>
          <b-form-datepicker id="eventEndDate" v-model="eventEndDate"></b-form-datepicker>
        </div>
      </div>
    </form>
  </b-tab>
</template>

<script>
import DefaultSelection from "../DefaultSelection.vue";

import { mapMutations } from "vuex";

const productStore = "productStore";

export default {
  name: "EventSearchTab",
  components: {
    DefaultSelection,
  },
  data() {
    return {
      eventStartDate: "",
      eventEndDate: "",
    };
  },
  methods: {
    ...mapMutations(productStore, ["SET_EVENTSTARTDATE"]),
    ...mapMutations(productStore, ["SET_EVENTENDDATE"]),
  },
  watch: {
    eventStartDate() {
      this.SET_EVENTSTARTDATE(this.eventStartDate);
    },
    eventEndDate() {
      const start = new Date(this.eventStartDate);
      const end = new Date(this.eventEndDate);
      if (this.eventStartDate != "" && start <= end) {
        this.SET_EVENTENDDATE(this.eventEndDate);
      } else {
        this.eventEndDate = "";
      }
    },
  },
};
</script>

<style scoped>
.dateselection-part {
  width: 40%;
}
</style>
