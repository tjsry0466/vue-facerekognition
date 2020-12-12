<template>
  <div>
    <FaceDetail></FaceDetail>
  </div>
</template>

<script>
import FaceDetail from "@/components/FaceDetail.vue";

export default {
  name: "Home",
  components: {
    FaceDetail,
  },
  data() {
    return {
      facedata: [],
    }
  },
  created() {
      console.log(this.$route.params.id);
    // axios
    //   .get('http://54.180.76.58:3000/api/homepage/', {
    //     headers: {
    //       // "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data.facedata);
    //     this.facedata = response.data.facedata;
    //   })
    //   .catch(function(error) {
    //     console.log('에러');
    //     console.log(error);
    //   });
  }
};
</script>

<style>

</style>