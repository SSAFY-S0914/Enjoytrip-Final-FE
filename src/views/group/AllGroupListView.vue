<template>
  <div>
    <div class="group-list-header">
      <h1>전체 그룹</h1>
      <div>
        <b-button>새 그룹 만들기</b-button>
      </div>
    </div>
    <GroupList></GroupList>
  </div>
</template>

<script>
import GroupList from "@/components/group/GroupList.vue";

export default {
  name: "AllGroupView",
  components: {
    GroupList,
  },
};
</script>

<style scoped>
.group-list-header {
  margin-bottom: 2rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>
