<template>
  <div></div>
</template>

<script>
export default {
  name: "tokenInfo",
  created() {
    let accesstoken = new URL(location.href).searchParams.get("access_token");
    let refreshtoken = new URL(location.href).searchParams.get("refresh_token");
    // localStorage.setItem("href", href);
    // localStorage.setItem("accesstoken", accesstoken);
    // localStorage.setItem("refreshtoken", refreshtoken);

    sessionStorage.setItem("accesstoken", accesstoken);
    sessionStorage.setItem("refreshtoken", refreshtoken);
    // location.href = "my-page.html";
    this.$router.push("/");
  },
};
</script>

<style></style>
