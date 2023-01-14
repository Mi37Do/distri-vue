<template>
  <Pie :data="data" :options="options"
  style="height:100%; width:80%"
   />
</template>

<script setup>

import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)
import { reactive } from 'vue-demi'

const data = reactive(
    {
        labels: ['prod 1', 'prod 2', 'prod 3', 'prod 4'],
        datasets: [
            {
            backgroundColor: ['#073f5c', '#f18021', '#3b9ebd', '#f6ad1c'],
            data: [40, 20, 80, 10]
            }
  ]
    }
)

const options = reactive({
    responsive: true,
})
</script>

<style>

</style>