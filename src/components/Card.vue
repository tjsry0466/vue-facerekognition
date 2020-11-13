<template>
  <div class="col-lg-3 col-md-6 mt-md-3">
    <div class="card shadow-sm p-3 p-md-2 mb-4 bg-white rounded" :class="color">
      <i class="far fa-plus-square plus-btn"></i>
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <h1>{{value}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['title','value','color']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.plus-btn {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  padding: 8px;
}
</style>
