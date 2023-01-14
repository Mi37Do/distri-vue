<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    style="height:100%; width:100%"
  />
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { reactive } from 'vue-demi'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = reactive(
  {labels: ['Jan', 'Feb', 'Mar', 'Aprl', 'May', 'Jun', 'Jul','Aug','Sept','Oct','Nov','Dec'],
  datasets: [
    {
      label: 'Ventes',
      backgroundColor: '#f18021',
      data: [40, 39, 10, 40, 39, 80, 40,0,0 ,0 ,0]
    }
  ]
        }
)

const chartOptions = reactive({
  responsive: true
})


</script>