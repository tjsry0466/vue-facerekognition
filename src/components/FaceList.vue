<template>
    <section id="team" class="pb-5 position-relative">
        <div class="container">
        <div class="face-filter mb-3 d-flex" v-if="filter">
            <button type="button" class="btn btn-outline-secondary m-1" @click="type=0">전체</button>
            <button type="button" class="btn btn-outline-success m-1" @click="type=1">분류</button>
            <button type="button" class="btn btn-outline-danger m-1" @click="type=2;hasGroup=false">미분류</button>
            <button type="button" class="btn btn-outline-dark m-1">
              <label class="checkbox-inline align-middle">
                  <input type="checkbox" value="" v-model="hasGroup"> 그룹별표시
              </label>
            </button>
          

          <form class="form-inline ml-auto">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="searchName">
            </form>    
      </div>
          <h5 class="section-title h1">최근 인식된 얼굴 데이터</h5>
          
          <div class="row">
            <Face 
                v-for="(value, key) in filterdata" :key="key"
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
                :confidence="value.confidence"
                :created_at="value.created_at">
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
  props: ['facedata', 'filter', 'pagination'],
  data() {
    return {
      type: 0, 
      hasGroup: false,
      searchName: '',
    }
  },
  mounted() {
    this.hasGroup = 0;
  },
  computed: {
    filterdata : function() {
      let returndata = [];
      if (!this.hasGroup){
        returndata = this.facedata;
      }
      if(this.type ==0){
        returndata =  this.facedata;
      }else if (this.type == 1){
        returndata =  this.facedata.filter((item) => {
          return item.isGroup;
        });
      }else if (this.type == 2){
        returndata = this.facedata.filter((item) => {
          return !item.isGroup;
        });
      }

      if (this.hasGroup == true){
        // 그룹화된 데이터
        returndata = JSON.parse(JSON.stringify(this.groupBy(this.facedata, 'groupID')));
        console.log(returndata);
        Object.keys(returndata).forEach((item, index) => {
          if (item !== "null"){
            returndata[item][0].imageName = returndata[item][0].groupName;
            returndata[item] = returndata[item][0];
          }else{
            delete returndata[item]
          }
        })
        // returndata
        let noGroupData = this.facedata.filter((item)=> {
          return !item.isGroup;
        });
        
        returndata = Object.values(Object.assign(returndata, noGroupData)).reverse();
      }

      if(this.searchName){
        returndata = returndata.filter((item)=> {
          console.log(item);
          return item.imageName === this.searchName || item.groupName === this.searchName;
        })
        console.log("hi");
      }

      
      return returndata;
    }
  },
  methods: {
    groupBy(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      }
    }
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
