<template>
  <div class="w-full h-14 border  hover:border-primary transition-all duration-300 rounded-lg flex-none"
  :class="{'bg-red-200 border-red-400 text-red-500' : !status, 'bg-white border-slate-200' : status}"
  >
    <div class="w-full h-full flex items-center pl-4 pr-1">
      <label  class="w-full grid grid-cols-6 gap-4 text-xs cursor-pointer" :class="{'font-bold' : !status, 'font-semibold' : status}">
        <span class="h-full flex items-center">FACT-2256332</span>
        <span class="h-full flex items-center">866 642 DA</span>
        <span class="h-full flex items-center">23 663 DA</span>
        <span class="h-full flex items-center">22-01-2022</span>
        <span class="h-full flex items-center">12-12-2023</span>
        <div class="w-full h-full flex items-center justify-between">
          <span v-if="status" class="px-2 py-1 flex items-center gap-2 rounded-md bg-amber-200 border border-orange-300 text-orange-500">
            <span class="w-2 h-2 rounded-full bg-orange-500"></span>
            partiellement-réglée
          </span>
          <span v-else class=" flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-red-500"></span>
            échue
          </span>

          <button class="btn btn-square btn-ghost text-slate-400 hover:bg-slate-100/60 rounded-md hover:text-primary">
            <UilArrowToBottom  class="w-6 h-6 text-slate-600"/>
          </button>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup>
import { UilArrowToBottom } from '@iconscout/vue-unicons'
const props = defineProps(['status'])

console.log(props.status);
</script>

<style>

</style>