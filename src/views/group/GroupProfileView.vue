<template>
  <div>
    <HeaderLayout></HeaderLayout>
    <main class="container">
      <InfoSection :options="options"></InfoSection>
    </main>
    <FooterLayout></FooterLayout>
  </div>
</template>

<script>
import HeaderLayout from "@/components/layout/HeaderLayout.vue";
import FooterLayout from "@/components/layout/FooterLayout.vue";
import InfoSection from "@/components/common/InfoSection.vue";

export default {
  name: "AllGroupListView",
  components: {
    HeaderLayout,
    FooterLayout,
    InfoSection,
  },
  data() {
    return {
      options: [
        {
          id: 0,
          title: "프로필 수정",
          url: "/profile/setting",
        },
        {
          id: 1,
          title: "팔로우, 팔로워",
          url: "/profile/myfollow",
        },
        {
          id: 2,
          title: "좋아요 목록",
          url: "/profile/mylike",
        },
        {
          id: 3,
          title: "내 그룹",
          url: "/profile/mygroup",
        },
        {
          id: 4,
          title: "내가 쓴 글",
          url: "/profile/mypost",
        },
        {
          id: 5,
          title: "내 코스",
          url: "/profile/mycourse",
        },
        {
          id: 6,
          title: "내가 작성한 댓글",
          url: "/profile/mycomment",
        },
      ],
    };
  },
};
</script>

<style></style>
