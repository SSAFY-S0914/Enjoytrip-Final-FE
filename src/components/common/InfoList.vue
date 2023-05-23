<template>
  <b-list-group>
    <b-list-group-item
      v-for="option in options"
      :key="option.id"
      :to="option.url"
      :class="{ active: option.id === currentItem }"
      @click="selectItem(option.id)"
    >
      {{ option.title }}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: "InfoList",
  props: ["options"],
  data() {
    return {
      currentItem: 0,
    };
  },
  methods: {
    selectItem(id) {
      this.currentItem = id;
    },
  },
};
</script>

<style></style>
