<template>
  <div>
    <h1>검색 결과</h1>
    <b-card-group deck>
      <SingleCard
        :title="'Card Title'"
        :src="'https://picsum.photos/600/300/?image=25'"
        :text="'Some quick example text to build on the card title and make up the bulk of the card'"
        :url="'#'"
      ></SingleCard>
      <SingleCard
        :title="'Card Title'"
        :src="'https://picsum.photos/600/300/?image=25'"
        :text="'Some quick example text to build on the card title and make up the bulk of the card'"
        :url="'#'"
      ></SingleCard>
      <SingleCard
        :title="'Card Title'"
        :src="'https://picsum.photos/600/300/?image=25'"
        :text="'Some quick example text to build on the card title and make up the bulk of the card'"
        :url="'#'"
      ></SingleCard>
      <SingleCard
        :title="'Card Title'"
        :src="'https://picsum.photos/600/300/?image=25'"
        :text="'Some quick example text to build on the card title and make up the bulk of the card'"
        :url="'#'"
      ></SingleCard>
      <SingleCard
        :title="'Card Title'"
        :src="'https://picsum.photos/600/300/?image=25'"
        :text="'Some quick example text to build on the card title and make up the bulk of the card'"
        :url="'#'"
      ></SingleCard>
      <SingleCard
        :title="'Card Title'"
        :src="'https://picsum.photos/600/300/?image=25'"
        :text="'Some quick example text to build on the card title and make up the bulk of the card'"
        :url="'#'"
      ></SingleCard>
      <SingleCard
        :title="'Card Title'"
        :src="'https://picsum.photos/600/300/?image=25'"
        :text="'Some quick example text to build on the card title and make up the bulk of the card'"
        :url="'#'"
      ></SingleCard>
      <SingleCard
        :title="'Card Title'"
        :src="'https://picsum.photos/600/300/?image=25'"
        :text="'Some quick example text to build on the card title and make up the bulk of the card'"
        :url="'#'"
      ></SingleCard>
      <SingleCard
        :title="'Card Title'"
        :src="'https://picsum.photos/600/300/?image=25'"
        :text="'Some quick example text to build on the card title and make up the bulk of the card'"
        :url="'#'"
      ></SingleCard>
      <SingleCard
        :title="'Card Title'"
        :src="'https://picsum.photos/600/300/?image=25'"
        :text="'Some quick example text to build on the card title and make up the bulk of the card'"
        :url="'#'"
      ></SingleCard>
      <SingleCard
        :title="'Card Title'"
        :src="'https://picsum.photos/600/300/?image=25'"
        :text="'Some quick example text to build on the card title and make up the bulk of the card'"
        :url="'#'"
      ></SingleCard>
      <SingleCard
        :title="'Card Title'"
        :src="'https://picsum.photos/600/300/?image=25'"
        :text="'Some quick example text to build on the card title and make up the bulk of the card'"
        :url="'#'"
      ></SingleCard>
      <SingleCard
        :title="'Card Title'"
        :src="'https://picsum.photos/600/300/?image=25'"
        :text="'Some quick example text to build on the card title and make up the bulk of the card'"
        :url="'#'"
      ></SingleCard>
      <SingleCard
        :title="'Card Title'"
        :src="'https://picsum.photos/600/300/?image=25'"
        :text="'Some quick example text to build on the card title and make up the bulk of the card'"
        :url="'#'"
      ></SingleCard>
      <SingleCard
        :title="'Card Title'"
        :src="'https://picsum.photos/600/300/?image=25'"
        :text="'Some quick example text to build on the card title and make up the bulk of the card'"
        :url="'#'"
      ></SingleCard>
    </b-card-group>
  </div>
</template>

<script>
import SingleCardwImgVue from "../common/SingleCardwImg.vue";

export default {
  name: "SearchResult",
  components: {
    SingleCard: SingleCardwImgVue,
  },
};
</script>

<style scoped>
.card-group {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
}
</style>
