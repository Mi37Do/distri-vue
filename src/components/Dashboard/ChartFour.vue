<template>
  <Pie :data="data" :options="options"
  style="height:50%; width:50%"
   />
</template>

<script setup>

import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { reactive } from 'vue-demi'

ChartJS.register(ArcElement, Tooltip, Legend)


const data = reactive(
    {
        labels: ['Receptions Et Enregistrement', 'Validation Et Traitement', 'Preparation', 'En Cours D expedition'],
        datasets: [
            {
            backgroundColor: ['#073f5c', '#f18021', '#3b9ebd', '#f6ad1c'],
            data: [140, 48, 11, 22]
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