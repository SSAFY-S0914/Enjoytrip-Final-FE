<template>
  <div>
    <HeaderLayout></HeaderLayout>
    <main class="container">
      <GroupList></GroupList>
    </main>
    <FooterLayout></FooterLayout>
  </div>
</template>

<script>
import HeaderLayout from "@/components/layout/HeaderLayout.vue";
import FooterLayout from "@/components/layout/FooterLayout.vue";
import GroupList from "@/components/GroupList.vue";

export default {
  name: "AllGroupView",
  components: {
    HeaderLayout,
    FooterLayout,
    GroupList,
  },
};
</script>

<style></style>
