<template>
  <router-view id="wrapper" />
</template>

<script></script>

<style>
@import "@/assets/css/reset.css";

#wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

body {
  width: 100%;
  min-height: 100vh;
}

header {
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  padding: 0 3rem;
}

.card-deck {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
}
</style>
