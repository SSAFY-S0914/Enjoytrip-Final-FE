<template>
  <b-list-group>
    <b-list-group-item
      v-for="option in options"
      :key="option"
      :to="option.url"
      @click="markColor()"
    >
      {{ option.title }}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: "InfoList",
  data() {
    return {
      options: [
        {
          title: "프로필 수정",
          url: "/profile/setting",
        },
        {
          title: "팔로우, 팔로워",
          url: "/profile/myfollow",
        },
        {
          title: "좋아요 목록",
          url: "/profile/mylike",
        },
        {
          title: "내 그룹",
          url: "/profile/mygroup",
        },
        {
          title: "내가 쓴 글",
          url: "/profile/mypost",
        },
        {
          title: "내 코스",
          url: "/profile/mycourse",
        },
        {
          title: "내가 작성한 댓글",
          url: "/profile/mycomment",
        },
      ],
    };
  },
};
</script>

<style></style>
