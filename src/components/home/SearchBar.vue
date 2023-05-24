<template>
  <div>
    <div class="p-1 bg-light rounded rounded-pill shadow-sm">
      <div class="input-group">
        <input
          type="search"
          placeholder="What're you searching for?"
          aria-describedby="button-addon1"
          class="form-control border-0 bg-light"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style scoped>
.input-group {
  width: 100%;
}

.form-control:focus {
  box-shadow: none;
}
</style>
