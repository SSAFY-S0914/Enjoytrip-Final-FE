<template>
  <div></div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "tokenInfo",
  methods: {
    ...mapMutations("MemberStore", ["SET_IS_LOGIN"]),
    forToken(){
      this.SET_IS_LOGIN(true);
      let accesstoken = new URL(location.href).searchParams.get("access_token");
      let refreshtoken = new URL(location.href).searchParams.get("refresh_token");
      let id = new URL(location.href).searchParams.get("id");
      // localStorage.setItem("href", href);
      // localStorage.setItem("accesstoken", accesstoken);
      // localStorage.setItem("refreshtoken", refreshtoken);

      sessionStorage.setItem("accesstoken", accesstoken);
      sessionStorage.setItem("refreshtoken", refreshtoken);
      sessionStorage.setItem("id", id);
      // location.href = "tokeninfo";
      this.$router.push("/");
    }
  },
  mounted() {
    this.forToken();
  },
  computed: {
    ...mapState("MemberStore", ["isLogin"]),
  },
};
</script>

<style></style>
