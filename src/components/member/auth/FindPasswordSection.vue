<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Find Password</h2>
                <div v-if="!form.flag">
                  <p class="text-white-50 mb-5">Please enter your email when signing up</p>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                      placeholder="Email"
                      v-model="form.useremail"
                    />
                  </div>
                </div>

                <div v-else>
                  <p class="text-white-50 mb-5">Please enter new password</p>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePasswordX"
                      class="form-control form-control-lg"
                      placeholder="Password"
                      v-model="form.userpw"
                    />
                  </div>
                </div>

                <div v-if="!form.flag">
                  <button class="btn btn-outline-light btn-lg px-5" @click="onSubmit">Enter</button>

                  <div class="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="http://localhost:8080/oauth2/authorization/google" class="text-white"
                      ><i class="fab fa-google fa-lg"></i
                    ></a>
                  </div>
                </div>

                <div v-else>
                  <button class="btn btn-outline-light btn-lg px-5" @click="onSubmitPass">
                    Enter
                  </button>

                  <div class="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="http://localhost:8080/oauth2/authorization/google" class="text-white"
                      ><i class="fab fa-google fa-lg"></i
                    ></a>
                  </div>
                </div>
              </div>

              <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { apiInstance } from "@/api/index.js";
export default {
  name: "FindPasswordSection",
  data() {
    return {
      form: {
        useremail: "",
        userpw: "",
        flag: false,
      },
    };
  },
  methods: {
    onSubmit() {
      // alert(JSON.stringify(this.form));

      const api = apiInstance();
      api
        .get("/members/findPass/" + this.form.useremail)
        .then(() => {
          // alert("확인");
          // const email = this.form.useremail;
          // this.$router.push("/changePass/" + email);
          this.form.flag = true;
        })
        .catch((exp) => alert("이메일 확인해주십시오." + exp));
    },
    onSubmitPass() {
      const api = apiInstance();
      api
        .post("/members/changePass", {
          email: this.form.useremail,
          password: this.form.userpw,
        })
        .then(() => {
          alert("비밀번호 변경이 완료되었습니다.");
          this.$router.push("/login");
        })
        .catch((exp) => alert("이메일 확인해주십시오." + exp));
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
