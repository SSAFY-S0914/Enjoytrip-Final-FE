<template>
  <div>
    <b-card
      :title="title"
      :img-src="src"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ text }}
      </b-card-text>

      <b-button :href="url" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardPart",
  props: ["title", "src", "text", "url"],
};
</script>

<style></style>
