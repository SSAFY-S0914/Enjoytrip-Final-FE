<template>
  <header class="shadow p-3 mb-5 bg-white rounded">
    <nav class="navbar">
      <a class="navbar-brand" href="/">
        <span>로고</span>
        <!-- <img src="@/assets/images/tmp.png" alt="" /> -->
      </a>
      <div class="header__inner">
        <!-- v-if="accesstoken == undefined" -->
        <a href="/login" class="mr-2">
          <b-button> 로그인 </b-button>
        </a>
        <a href="/signup">
          <b-button> 회원가입 </b-button>
        </a>
        <div class="profile-dropdown">
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
            <b-dropdown-item @click="toGroupView">그룹 보기</b-dropdown-item>
            <b-dropdown-item @click="toPostView">게시글 보기</b-dropdown-item>
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
    moveLink(url) {
      if (this.$route.path != url) {
        this.$router.push(url);
      }
    },
    Profile() {
      this.moveLink("/profile/setting");
    },
    toGroupView() {
      this.moveLink("/groups");
    },
    toPostView() {
      this.moveLink("/posts");
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

.header__inner > * {
  display: flex;
  align-items: center;
}
</style>
