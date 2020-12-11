<template>

  <div>
    <Navbar/>
    <div class="container">
      <card-list :carddata="carddata"/>
      <div class="piechart border border shadow-sm p-3 mb-4 bg-white rounded">
        <pie-chart v-if="loaded" :chartdata="chartdata"></pie-chart>
      </div>
      <FaceList :facedata="facedata"></FaceList>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Navbar from "@/components/Navbar.vue";
import CardList from "@/components/CardList.vue";
import PieChart from "@/components/PieChart.vue";
import FaceList from "@/components/FaceList.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    CardList,
    PieChart,
    FaceList,
  },
  data() {
    return {
      chartdata: {},
      carddata: [],    
        //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      },
      chartloaded: false,
      facedata: [],
    }
  },
  created() {

    this.$socket.on('update', (data)=> { 
        this.loaded = false;
        console.log(data);
        this.convertdata(data);
        // console.log(this.facedata.length);
        this.loaded = true;
        this.$bvToast.toast('이미지가 추가가 완료되었습니다.', {
          title: `알림`,
          variant: 'success',
          solid: true,
          autoHideDelay: 2000,
          appendToast: false,
        })
      });

      this.loaded = false;
      axios
      .get('http://54.180.76.58:3000/api/homepage/', {
        headers: {
          // "Content-Type": "application/json",
        },
      })
      .then((response) => {
          this.convertdata(response.data);
          this.loaded = true;
      })
      .catch(function(error) {
        console.log('에러');
        console.log(error);
      });
  },
  mounted(){

  },
  methods: {
    convertdata(response) {
      
      this.carddata= [
            {
              title: "인식 데이터 수",
              value: response.carddata.count,
              color: 'border-dark',
            },
            {
              title: "분류 데이터 수",
              value: response.carddata.yesGroupCount,
              color: 'border-success',
            },
            {
              title: "미분류 데이터 수",
              value: response.carddata.noGroupCount,
              color: 'border-danger',
            },
            {
              title: "그룹 데이터 수",
              value: response.carddata.groupCount,
              color: 'border-primary',
            },
          ]
        this.chartdata= {
          //Data to be represented on x-axis
          labels: Object.keys(response.chartdata),
          datasets: [
            {
              label: '# of Votes',
              backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
              data: Object.values(response.chartdata),
            }
          ]
        }
        this.facedata = response.facedata;
    }
  },
  // computed() {

  // }
};
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
#pie-chart{
  margin: 0 auto;
  max-height: 400px;
  max-width: 400px;
}
</style>