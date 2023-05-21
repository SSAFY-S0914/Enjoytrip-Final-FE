<template>
  <div>
    <b-tabs content-class="mt-3" justified>
      <b-tab title="팔로잉" active>
        <div class="grid-container">
          <div class="avatar">
            <b-avatar></b-avatar>
            <span>하정호</span>
            <b-button variant="danger">삭제</b-button>
          </div>
          <div class="avatar">
            <b-avatar></b-avatar>
            <span>하정호</span>
            <b-button variant="danger">삭제</b-button>
          </div>
          <div class="avatar">
            <b-avatar></b-avatar>
            <span>하정호</span>
            <b-button variant="danger">삭제</b-button>
          </div>
          <div class="avatar">
            <b-avatar></b-avatar>
            <span>하정호</span>
            <b-button variant="danger">삭제</b-button>
          </div>
          <div class="avatar">
            <b-avatar></b-avatar>
            <span>하정호</span>
            <b-button variant="danger">삭제</b-button>
          </div>
          <div class="avatar">
            <b-avatar></b-avatar>
            <span>하정호</span>
            <b-button variant="danger">삭제</b-button>
          </div>
          <div class="avatar">
            <b-avatar></b-avatar>
            <span>하정호</span>
            <b-button variant="danger">삭제</b-button>
          </div>
          <div class="avatar">
            <b-avatar></b-avatar>
            <span>하정호</span>
            <b-button variant="danger">삭제</b-button>
          </div>
        </div>
      </b-tab>
      <b-tab title="팔로워">
        <div class="grid-container"></div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: "FollowSetting",
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1.5rem;
  margin-top: 2rem;
}

.avatar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
