import LoginView from "@/views/member/LoginView";
import SignupView from "@/views/member/SignupView";

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
];
