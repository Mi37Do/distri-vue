<template>
  <Line 
  :data="chartData" 
  :options="chartOptions"
  style="height:100%; width:100%" />
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { reactive } from 'vue-demi'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const chartData = reactive(
  {labels: ['Jan', 'Feb', 'Mar', 'Aprl', 'May', 'Jun', 'Jul','Aug','Sept','Oct','Nov','Dec'],
  datasets: [
    {
      label: 'Ventes',
      backgroundColor: '#073f5c',
      data: [40, 39, 10, 40, 39, 80, 40,0,0 ,0 ,0]
    }
  ]
        }
)

const chartOptions = reactive({
  responsive: true,
})
</script>

<style>

</style>