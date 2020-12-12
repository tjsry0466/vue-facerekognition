<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
        <FaceDetail :facedata = facedata></FaceDetail>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from "@/components/Navbar.vue";
import FaceDetail from "@/components/FaceDetail.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    FaceDetail,
  },
  data() {
    return {
      id : 0,
      facedata: {},
    }
  },
  created() {
      this.id =this.$route.params.id;
    axios
      .get('http://localhost:3000/api/face/' + this.id, {
        headers: {
          // "Content-Type": "application/json",
        },
      })
      .then((response) => {
        this.facedata = response.data[0];
        console.log(this.facedata);
      })
      .catch(function(error) {
        console.log('에러');
        console.log(error);
      });
  }
};
</script>

<style>

</style>