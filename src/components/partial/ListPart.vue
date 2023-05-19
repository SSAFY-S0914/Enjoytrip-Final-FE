<template>
  <div class="card-group">
    <CardPart
      :title="'Card Title'"
      :src="'https://picsum.photos/600/300/?image=25'"
      :text="'Some quick example text to build on the card title and make up the bulk of the card'"
      :url="'#'"
    ></CardPart>
    <CardPart
      :title="'Card Title'"
      :src="'https://picsum.photos/600/300/?image=25'"
      :text="'Some quick example text to build on the card title and make up the bulk of the card'"
      :url="'#'"
    ></CardPart
    ><CardPart
      :title="'Card Title'"
      :src="'https://picsum.photos/600/300/?image=25'"
      :text="'Some quick example text to build on the card title and make up the bulk of the card'"
      :url="'#'"
    ></CardPart
    ><CardPart
      :title="'Card Title'"
      :src="'https://picsum.photos/600/300/?image=25'"
      :text="'Some quick example text to build on the card title and make up the bulk of the card'"
      :url="'#'"
    ></CardPart
    ><CardPart
      :title="'Card Title'"
      :src="'https://picsum.photos/600/300/?image=25'"
      :text="'Some quick example text to build on the card title and make up the bulk of the card'"
      :url="'#'"
    ></CardPart
    ><CardPart
      :title="'Card Title'"
      :src="'https://picsum.photos/600/300/?image=25'"
      :text="'Some quick example text to build on the card title and make up the bulk of the card'"
      :url="'#'"
    ></CardPart
    ><CardPart
      :title="'Card Title'"
      :src="'https://picsum.photos/600/300/?image=25'"
      :text="'Some quick example text to build on the card title and make up the bulk of the card'"
      :url="'#'"
    ></CardPart
    ><CardPart
      :title="'Card Title'"
      :src="'https://picsum.photos/600/300/?image=25'"
      :text="'Some quick example text to build on the card title and make up the bulk of the card'"
      :url="'#'"
    ></CardPart
    ><CardPart
      :title="'Card Title'"
      :src="'https://picsum.photos/600/300/?image=25'"
      :text="'Some quick example text to build on the card title and make up the bulk of the card'"
      :url="'#'"
    ></CardPart
    ><CardPart
      :title="'Card Title'"
      :src="'https://picsum.photos/600/300/?image=25'"
      :text="'Some quick example text to build on the card title and make up the bulk of the card'"
      :url="'#'"
    ></CardPart>
  </div>
</template>

<script>
import CardPart from "./CardPart.vue";

export default {
  name: "ListPart",
  components: {
    CardPart,
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
