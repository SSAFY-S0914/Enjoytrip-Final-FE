<template>
  <div>
    <HeaderLayout></HeaderLayout>
    <InitViewMain class="container"></InitViewMain>
  </div>
</template>

<script>
import HeaderLayout from "@/components/layout/HeaderLayout.vue";
import InitViewMain from "@/components/InitViewMain.vue";

export default {
  name: "InitView",
  components: { HeaderLayout, InitViewMain },
};
</script>

<style>
body {
  /* background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
