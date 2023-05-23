<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group class="form-group" id="input-group-2" label="이름" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" placeholder="이름" required></b-form-input>
      </b-form-group>

      <b-form-group class="form-group" id="input-group-2" label="생년월일" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.birth"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group class="form-group" id="input-group-2" label="닉네임" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.nickname"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group class="form-group" id="input-group-1" label="이메일" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.useremail"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group class="form-group" id="input-group-2" label="비밀번호" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group class="form-group" id="input-group-2" label="비밀번호 확인" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.checkpw"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <div class="form-btn">
        <b-button class="mr-2" type="submit" variant="primary">수정하기</b-button>
        <b-button type="reset" variant="danger">초기화</b-button>
      </div>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ProfileSetting",
  data() {
    return {
      form: {
        name: "",
        birth: "",
        email: "",
        nickname: "",
        useremail: "",
        password: "",
        checkpw: "",
        // food: null,
        checked: [],
      },
      // foods: [{ text: "Select One", value: null }, "Carrots", "Beans", "Tomatoes", "Corn"],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.birth = "";
      this.form.email = "";
      this.form.nickname = "";
      this.form.useremail = "";
      this.form.password = "";
      this.form.checkpw = "";

      // this.form.food = null;
      // this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 2rem;
}

.form-btn {
  display: flex;
  justify-content: center;
}
</style>
