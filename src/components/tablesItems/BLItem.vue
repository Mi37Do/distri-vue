<template>
  <div class="w-full h-14 bg-white border border-slate-200 hover:border-primary transition-all duration-300 rounded-lg flex-none">
    <div class="w-full h-full flex items-center pl-4 pr-1">
      <label  for="BLModal" class="w-full grid grid-cols-7 gap-4 text-xs font-semibold cursor-pointer">
        <span class="h-full flex items-center">BL-2002220</span>
        <span class="h-full flex items-center">08-01-2023</span>
        <span class="h-full flex items-center">240 000 000 DA</span>
        <span class="h-full flex items-center">FACT-2266503</span>
        <span class="h-full flex items-center">22-12-2022</span>
        <span class="h-full flex items-center">450 000 DA</span>
        <div class="w-full h-full flex items-center justify-between">
          <span class="px-2 py-1 flex items-center gap-2 rounded-md bg-emerald-200 border border-green-300 text-green-500">
            <span class="w-2 h-2 rounded-full bg-green-500"></span>
            livrée
          </span>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup>
import { UilAngleRight } from '@iconscout/vue-unicons'
</script>

<style>

</style>