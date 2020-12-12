<template>
  <!--Section: Content-->
<section>

  <!-- Section heading -->
  <h3 class="text-center my-4">{{facedata.face_id_}}</h3>
  <!-- Section description -->

  <!-- Grid row -->
  <div class="row">
    <!-- Grid column -->
    <div class="col-lg-5 text-center text-lg-left">
      <img class="img-fluid" :src="'https://facecog-bucket.s3.ap-northeast-2.amazonaws.com/upload/' + facedata.ExternalImageId" alt="Sample image">
    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-lg-7">
      <!-- <ul class="list-unstyled fa-ul mb-lg-0 mb-5"> -->

        <b-container class="bv-example-row">
          <b-row v-for="(item,key) in facedata" :key="key">
            <b-col>{{key}}</b-col>
            <b-col>{{item}}</b-col>
          </b-row>
        </b-container>
      <!-- </ul> -->

    </div>
    <!--Grid column-->

  </div>
  <!-- Grid row -->

</section>
<!--Section: Content-->
</template>

<script>
export default {
  name: "FaceDetail",
  components: {
  },
  props: ['facedata'],
  created() {
    console.log(this.facedata);
    console.log("쿵쿵");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
