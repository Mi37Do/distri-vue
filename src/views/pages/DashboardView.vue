<template>
  <div class="w-full h-full grid grid-cols-4 grid-rows-4 gap-4 overflow-hidden">


    <div class="w-full h-full flex flex-col row-span-2 col-span-2 gap-4">
      <span class="text-xl font-black text-slate-500 capitalize">ventes</span>
      <div class="w-full grow bg-base-100 rounded-2xl border border-slate-200 p-4 grid grid-cols-3 gap-6">
        <div class="w-full h-full flex-none">
          <VentesStats/>
        </div>
        <ChartOne class="col-span-2"/>
    </div>
    </div>

    <div class="w-full h-full flex flex-col row-span-2 col-span-2 gap-4">
      <span class="text-xl font-black text-slate-500 capitalize">créances</span>
      <div class="w-full grow bg-base-100 rounded-2xl border border-slate-200 p-4 grid grid-cols-3 gap-6">
        <div class="w-full h-full flex-none">
          <CreanceStats/>
        </div>
        <ChartTwo class="col-span-2"/>
    </div>
    </div>

    <div class="w-full h-full flex flex-col row-span-2 col-span-1 gap-4">
      <span class="text-xl font-black text-slate-500 capitalize">Top Commandes</span>
      <div class="w-full grow bg-base-100 rounded-2xl border border-slate-200 p-4 gap-6 flex items-center justify-center">
        <ChartThree/>
    </div>
    </div>

    <div class="w-full h-full flex flex-col row-span-2 col-span-2 gap-4">
      <span class="text-xl font-black text-slate-500 capitalize">commandes</span>
      <div class="w-full grow bg-base-100 rounded-2xl border border-slate-200 p-4 grid grid-cols-3 gap-6">
        <div class="w-full h-full flex-none">
          <CommandesStats/>
        </div>
        <div class="col-span-2 flex items-center justify-center">
          <ChartFour/>
        </div>
        
    </div>
    </div>

    <div class="w-full h-full flex flex-col row-span-1 col-span-1 gap-4">
      <span class="text-xl font-black text-slate-500 capitalize">Reclamations Et Intervention</span>
      <div class="w-full grow bg-base-100 rounded-2xl border border-slate-200 p-4 gap-6">
        <div class="w-full h-full flex-none">
          <ReclamationStats/>
        </div>
        
    </div>
    </div>

  </div>
</template>

<script setup>
import ChartOne from '@/components/Dashboard/ChartOne.vue'
import VentesStats from '@/components/Dashboard/VentesStats.vue'
import CreanceStats from '@/components/Dashboard/CreanceStats.vue'
import ChartTwo from '@/components/Dashboard/ChartTwo.vue'
import ChartThree from '@/components/Dashboard/ChartThree.vue'
import CommandesStats from '@/components/Dashboard/CommandesStats.vue'
import ChartFour from '@/components/Dashboard/ChartFour.vue'
import ReclamationStats from '@/components/Dashboard/ReclamationStats.vue'
</script>

<style>

</style>