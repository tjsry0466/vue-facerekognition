<template>
    <section id="team" class="pb-5 position-relative">
        <div class="container">
          <h5 class="section-title h1">최근 인식된 얼굴 데이터</h5>
          <div class="row">
            <Face 
                v-for="(value, index) in facedata" :key="index" 
                :faceID="value.faceID" 
                :imageURL="value.imageURL" 
                :imageName="value.imageName" 
                :isGroup="value.isGroup" 
                :ageRangeLow="value.ageRange_low" 
                :ageRangeHigh="value.ageRange_high" 
                :gender="value.gender" 
                :feeling="value.feeling" 
                :smile="value.smile" 
                :glass="value.glass" 
                :confidence="value.confidence">
            </Face>
          </div>
        </div>
    </section>
</template>

<script>
import Face from "@/components/Face.vue";

export default {
  name: "FaceList",
  components: {
      Face
  },
  props: ['facedata'],
  mounted() {
      console.log(this.facedata);
  }
//   props: {'title': String, 'value': String, 'color': String},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#team {
  background: #f5f5f5 !important;
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: #108d6f;
  border-color: #108d6f;
  box-shadow: none;
  outline: none;
}

.btn-primary {
  color: #fff;
  background-color: #007b5e;
  border-color: #007b5e;
}

section {
  padding: 60px 0;
}

section .section-title {
  text-align: center;
  color: #007b5e;
  margin-bottom: 50px;
  text-transform: uppercase;
}

#team .card {
  border: none;
  background: #ffffff;
}
</style>
