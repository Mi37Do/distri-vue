<template>
  <div class="w-full h-14 bg-white border border-slate-200 hover:border-primary transition-all duration-300 rounded-lg flex-none">
    <div class="w-full h-full flex items-center pl-4 pr-1">
      <label  for="BCModal" class="w-full grid grid-cols-6 gap-4 text-xs font-semibold cursor-pointer">
        <span class="h-full flex items-center">BC-2002220</span>
        <span class="h-full flex items-center">08-01-2023</span>
        <span class="h-full flex items-center">240 000 000 DA</span>
        <span class="h-full flex items-center">600 000 000 DA</span>
        <span class="h-full flex items-center">450 000 DA</span>
        <div class="w-full h-full flex items-center justify-between">
          <span class="px-2 py-1 flex items-center gap-2 rounded-md bg-red-100 border border-red-200 text-red-400">
            <span class="w-2 h-2 rounded-full bg-red-400"></span>
            non-validé
          </span>

          <router-link to="/bdl" class="btn btn-square btn-ghost text-slate-400 hover:bg-slate-100 rounded-md hover:text-primary">
            <UilAngleRight class="w-6 h-6"/>
          </router-link>
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