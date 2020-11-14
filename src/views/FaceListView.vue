<template>
  <div>
    <Navbar/>
      
    <FaceList :facedata="facedata" :pagination="1" :filter="1"></FaceList>

  </div>
</template>

<script>
import axios from 'axios';
import Navbar from "@/components/Navbar.vue";
import FaceList from "@/components/FaceList.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    FaceList,
  },
  data() {
    return {
      facedata: [],
    }
  },
  created() {
    axios
      .get('http://localhost:3000/api/homepage/', {
        headers: {
          // "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.facedata);
        this.facedata = response.data.facedata;
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