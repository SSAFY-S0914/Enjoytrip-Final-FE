import MemberProfileView from "@/views/member/MemberProfileView";
import ProfileSetting from "@/components/member/profile/ProfileSetting";
import LikeSetting from "@/components/member/profile/LikeSetting";
import FollowSetting from "@/components/member/profile/FollowSetting";
import MemberDelete from "@/components/member/profile/MemberDelete";

export default [
  {
    path: "/profile",
    name: "profile",
    component: MemberProfileView,
    children: [
      {
        path: "/profile/setting",
        name: "profileSetting",
        component: ProfileSetting,
      },
      {
        path: "/profile/mylike",
        component: LikeSetting,
      },
      {
        path: "/profile/myfollow",
        component: FollowSetting,
      },
      {
        path: "/profile/delete",
        component: MemberDelete,
      },
    ],
  },
];
