<template>
  <div>
    <HeaderLayout></HeaderLayout>
    <main class="container">
      <div class="group-list-header">
        <h1>전체 그룹</h1>
        <div>
          <b-button>새 그룹 만들기</b-button>
        </div>
      </div>
      <GroupList></GroupList>
    </main>
    <FooterLayout></FooterLayout>
  </div>
</template>

<script>
import HeaderLayout from "@/components/layout/HeaderLayout.vue";
import FooterLayout from "@/components/layout/FooterLayout.vue";
import GroupList from "@/components/group/GroupList.vue";

export default {
  name: "AllGroupView",
  components: {
    HeaderLayout,
    FooterLayout,
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
