<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">Please enter your login and password!</p>

                <div class="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="typeEmailX"
                    class="form-control form-control-lg"
                    placeholder="Email"
                    v-model="form.useremail"
                  />
                </div>

                <div class="form-outline form-white mb-4">
                  <input
                    type="password"
                    id="typePasswordX"
                    class="form-control form-control-lg"
                    placeholder="Password"
                    v-model="form.userpw"
                  />
                </div>

                <p class="small mb-5 pb-lg-2">
                  <a class="text-white-50" href="/findPass">Forgot password?</a>
                </p>

                <button class="btn btn-outline-light btn-lg px-5" @click="onSubmit">Login</button>

                <div class="d-flex justify-content-center text-center mt-4 pt-1">
                  <a href="http://localhost:8080/oauth2/authorization/google" class="text-white"
                    ><i class="fab fa-google fa-lg"></i
                  ></a>
                </div>
              </div>

              <div>
                <p class="mb-0">
                  Don't have an account? <a href="/signup" class="text-white-50 fw-bold">Sign Up</a>
                </p>
              </div>

              <!-- <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
              </b-card> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { apiInstance } from "@/api/index.js";
import { mapMutations } from "vuex";
export default {
  name: "LoginSection",
  data() {
    return {
      form: {
        useremail: "",
        userpw: "",
      },
    };
  },
  methods: {
    ...mapMutations("MemberStore", ["SET_IS_LOGIN"]),
    onSubmit() {
      // alert(JSON.stringify(this.form));

      const api = apiInstance();
      api
        .post("/auth/login", {
          email: this.form.useremail,
          password: this.form.userpw,
        })
        .then((response) => {
          // 등록 성공 메세지 출력
          alert("로그인이 완료되었습니다.");
          // header 에서 token 추출
          this.SET_IS_LOGIN(true);
          const authorization = response.headers["authorization"];
          const refresh = response.headers["refresh"];
          const id = response.headers["id"];
          sessionStorage.setItem("accesstoken", authorization);
          sessionStorage.setItem("refresh", refresh);
          sessionStorage.setItem("id", id);
          // 목록 페이지로 이동하기
          this.$router.push({ path: `/` });
        })
        .catch((exp) => alert("이메일 혹은 패스워드를 확인해주십시오." + exp));
    },
  },
};
</script>

<style scoped>
.gradient-custom {
  /* fallback for old browsers */
  background: #6a11cb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
}
</style>
