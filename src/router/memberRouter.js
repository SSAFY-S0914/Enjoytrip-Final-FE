import LoginView from "@/views/member/LoginView";
import SignupView from "@/views/member/SignupView";
import FindPassword from "@/views/member/FindPassword";

export default [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/findPass",
    name: "findpass",
    component: FindPassword,
  },
];
