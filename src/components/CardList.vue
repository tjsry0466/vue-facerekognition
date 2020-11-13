<template>
<div>
  <div class="row">
    <Card :title="item.title" :value="item.value" :color="item.color" v-for="(item, index) in carddata" :key="index"></Card>
  </div>
</div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "CardList",
  components: {
    Card,
  },
  props: ['carddata'],
  mounted() {
  }
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
