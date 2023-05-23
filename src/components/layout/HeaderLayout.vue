<template>
  <header class="shadow p-3 mb-5 bg-white rounded">
    <nav class="navbar">
      <a class="navbar-brand" href="/">
        <span>로고</span>
        <!-- <img src="@/assets/images/tmp.png" alt="" /> -->
      </a>
      <div class="header__inner">
        <!-- <div class="before-login" v-if="accesstoken == ''" @click="logIn">로그인</div> -->
        <div
          class="before-login"
          v-if="accesstoken == undefined"
          style="display: flex; color: black"
        >
          <a href="http://localhost:8080/oauth2/authorization/google">구글 로그인 | </a>
          <!-- 라우터 링크 -->
          <a>일반 로그인 |</a>
          <a>회원 가입</a>
        </div>
        <div class="profile-dropdown" v-else>
          <b-dropdown
            id="dropdown-right"
            right
            text="Right align"
            variant=""
            toggle-class="text-decoration-none"
            class="m-2"
            no-caret
          >
            <template #button-content><i class="fa-solid fa-user"></i></template>
            <b-dropdown-item @click="Profile">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Likes</b-dropdown-item>
            <b-dropdown-item href="#">Follows</b-dropdown-item>
            <b-dropdown-item @click="Logout">Logout</b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="menu-dropdown">
          <b-dropdown
            id="dropdown-right"
            right
            text="Right align"
            variant=""
            toggle-class="text-decoration-none"
            class="m-2"
            no-caret
          >
            <template #button-content><i class="fa-solid fa-bars"></i></template>
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderLayout",
  data() {
    return {
      accesstoken: "",
      sessionValue: "",
      member: "",
    };
  },
  mounted() {
    this.accesstoken = sessionStorage.accesstoken;
    console.log(this.accesstoken);
  },
  methods: {
    Logout() {
      sessionStorage.clear();
      this.accesstoken = undefined;
    },
    Profile() {
      // console.log(this.$router);
      // console.log(this.$route.path);
      if (this.$route.path != "/profile") {
        this.$router.push("/profile");
      }
    },
  },
};
</script>

<style scoped>
header {
  border-bottom: 1px solid lightgray;
  display: flex;
}

header .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar-brand {
  height: 100%;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  color: white;
}
</style>
