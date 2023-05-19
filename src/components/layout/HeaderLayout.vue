<template>
  <header class="shadow p-3 mb-5 bg-white rounded">
    <nav class="navbar">
      <a class="navbar-brand" href="#">
        <!-- <img src="@/assets/images/tmp.png" alt="" /> -->
      </a>
      <div class="header__inner">
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
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
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
};
</script>

<style scoped>
header {
  border-bottom: 1px solid lightgray;
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
