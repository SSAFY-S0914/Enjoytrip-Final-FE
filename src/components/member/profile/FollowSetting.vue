<template>
  <div>
    <b-tabs content-class="mt-3" justified>
      <b-tab title="팔로잉" active>
        <b-card-group class="card-deck">
          <b-card>
            <b-avatar></b-avatar>
            <span>하정호</span>
            <b-button variant="danger">삭제</b-button>
          </b-card>
          <b-card>
            <b-avatar></b-avatar>
            <span>하정호</span>
            <b-button variant="danger">삭제</b-button>
          </b-card>
          <b-card>
            <b-avatar></b-avatar>
            <span>하정호</span>
            <b-button variant="danger">삭제</b-button>
          </b-card>
          <b-card>
            <b-avatar></b-avatar>
            <span>하정호</span>
            <b-button variant="danger">삭제</b-button>
          </b-card>
          <b-card>
            <b-avatar></b-avatar>
            <span>하정호</span>
            <b-button variant="danger">삭제</b-button>
          </b-card>
          <b-card>
            <b-avatar></b-avatar>
            <span>하정호</span>
            <b-button variant="danger">삭제</b-button>
          </b-card>
        </b-card-group>
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
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
