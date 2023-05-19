<template>
  <div class="center-wrapper">
    <div>
      <router-link to="/home">로고</router-link>
    </div>
    <div>
      <input type="text" class="main-searchbar" placeholder="어디로 가실" />
      <b-button class="main-searchbar-btn" variant="secondary">
        <i class="fa-solid fa-magnifying-glass"></i>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InitViewMain",
};
</script>

<style scoped>
.center-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.center-wrapper div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-searchbar {
  width: 50%;
  height: 4rem;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  margin-right: 1rem;
}

.main-searchbar-btn {
  font-size: 1.7rem;
}
</style>
