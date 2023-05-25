<template>
  <div>
    <b-card
      :title="title"
      :img-src="src"
      img-alt=""
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ text }}
      </b-card-text>

      <b-button variant="primary" @click="moveDetail">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "SingleCardwImg",
  props: ["title", "src", "text", "contentid"],
  methods: {
    moveDetail() {
      this.$router.push({
        name: "productDetail",
        params: { contentId: this.contentid },
      });
    },
  },
};
</script>

<style scoped>
img {
  width: 15rem;
  height: 10rem;
  object-fit: cover;
}
</style>
