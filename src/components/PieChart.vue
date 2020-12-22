<script>
import { Pie } from 'vue-chartjs'
// const { reactiveProp } = mixins

export default {
  extends: Pie,
  // mixins: [reactiveProp],
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  },
  watch: {
    chartdata: function(){
      this.renderChart(this.chartdata, this.options)
    }
  }
}
</script>

<style>
</style>