<template>
  <div>
    <Navbar/>
    <div class="container">
      <card-list :carddata="carddata"/>
      <div class="piechart border border shadow-sm p-3 mb-4 bg-white rounded">
        <pie-chart v-if="loaded" :chartdata="chartdata"></pie-chart>
      </div>
      <FaceList v-if="loaded" :facedata="facedata"></FaceList>
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
    FaceList
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
      this.loaded = false;
      axios
      .get('http://localhost:3000/api/homepage/', {
        headers: {
          // "Content-Type": "application/json",
        },
      })
      .then((response) => {
          this.carddata= [
            {
              title: "인식 데이터 수",
              value: response.data.carddata.count,
              color: 'border-dark',
            },
            {
              title: "분류 데이터 수",
              value: response.data.carddata.yesGroupCount,
              color: 'border-success',
            },
            {
              title: "미분류 데이터 수",
              value: response.data.carddata.noGroupCount,
              color: 'border-danger',
            },
            {
              title: "그룹 데이터 수",
              value: response.data.carddata.groupCount,
              color: 'border-primary',
            },
          ]
        this.chartdata= {
          //Data to be represented on x-axis
          labels: Object.keys(response.data.chartdata),
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
              data: Object.values(response.data.chartdata),
            }
          ]
        }
        this.facedata = response.data.facedata;
      })
      .catch(function(error) {
        console.log('에러');
        console.log(error);
      });
  },
  mounted(){
    this.loaded = true;
  }
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