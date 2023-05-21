<template>
  <b-list-group>
    <b-list-group-item button class="item">
      <div class="writer-avatar">
        <b-avatar></b-avatar>
      </div>
      <div class="item-content">
        <div class="item-content__title">놀러가요!</div>
        <div class="item-content__writer">하정호</div>
      </div>
    </b-list-group-item>
    <b-list-group-item button>I am a button</b-list-group-item>
    <b-list-group-item button disabled>Disabled button</b-list-group-item>
    <b-list-group-item button>This is a button too</b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: "LikeSetting",
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  width: 100%;
}

.writer-avatar {
  margin-right: 2rem;
}

.item-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-content__title {
  font-size: 1.4rem;
  font-weight: 600;
}
</style>
