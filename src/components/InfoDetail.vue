<template>
  <div>
    <ProfileSetting></ProfileSetting>
    <FollowSetting></FollowSetting>
    <LikeSetting></LikeSetting>
  </div>
</template>

<script>
import FollowSetting from "./partial/ProfileSetting/FollowSetting.vue";
import LikeSetting from "./partial/ProfileSetting/LikeSetting.vue";
import ProfileSetting from "./partial/ProfileSetting/ProfileSetting.vue";

export default {
  name: "InfoDetail",
  components: {
    ProfileSetting,
    FollowSetting,
    LikeSetting,
  },
};
</script>

<style></style>
