<template>
  <div>
    <div>정말로 회원 탈퇴를 하시겠습니까?</div>
    <br />
    <br />
    <br />
    <br />
    <div class="form-btn">
      <b-button class="mr-2" @click="doDel" variant="danger">예</b-button>
      <b-button class="mr-2" @click="goHome" variant="primary">아니요</b-button>
    </div>
    {{ id }}
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { apiInstance } from "@/api/index.js";
export default {
  name: "PostSetting",
  data() {
    return {
      id: "",
    };
  },
  mounted() {
    this.id = sessionStorage.id;
    console.log(this.id);
  },
  methods: {
    ...mapMutations("MemberStore", ["SET_IS_LOGIN"]),
    goHome() {
      this.$router.push("/");
    },
    doDel() {
      const api = apiInstance();
      api
        .delete("/members/" + this.id)
        .then(() => {
          this.SET_IS_LOGIN(false);
          sessionStorage.clear();
          alert("삭제가 완료되었습니다.");
          this.$router.push({ path: `/` });
        })
        .catch(() => alert(this.id));
    },
  },
};
</script>

<style scoped>
.form-btn {
  display: flex;
  justify-content: center;
}
</style>
