<template>
  <div class="w-full h-full bg-white rounded-2xl border border-slate-200 overflow-hidden p-4 flex flex-col gap-4">
    <div class="w-full h-12 flex items-center justify-between">
        <div class="text-sm breadcrumbs">
        <ul>
            <li class="text-xl font-black text-primary capitalize">factures</li> 
        </ul>
        </div>

        <div class="h-full flex gap-4 items-center">
            <label for="FactFilters" class="btn btn-square btn-ghost border border-slate-200 hover:bg-slate-100 hover:border-primary hover:text-primary text-text-slate-600 rounded-xl flex gap-2 items-center relative transition-all duration-200">
                <UilFilter class="w-6 h-6"/>
            </label>
        </div>
    </div>

    <div class="w-full grow bg-slate-200/50 border border-slate-2 flex flex-col rounded-xl overflow-hidden">
        <div class="w-full h-14 bg-primary rounded-t-xl text-sm flex-none pl-8 pr-5 grid grid-cols-6 gap-4 text-white font-semibold">
            <span class="h-full flex items-center">N° fact</span>
            <span class="h-full flex items-center capitalize">montant</span>
            <span class="h-full flex items-center capitalize">reliquat</span>
            <span class="h-full flex items-center capitalize">date de facturation</span>
            <span class="h-full flex items-center capitalize">date d'écheance</span>
            <span class="h-full flex items-center capitalize">état</span>
        </div>

        <div class="w-full grow overflow-auto">
            <div class="w-full h-full flex flex-col gap-2 p-2">
                <FactItem/>
                <FactItem status="false"/>
            </div>
        </div>
        
    </div> 

    <div class="w-full flex justify-end">
     <div class="px-6 py-4 border border-slate-200 w-fit rounded-xl grid grid-cols-2 gap-10">
        <div class="w-full flex flex-col gap-1">
            <span class="text-sm font-medium capitalize">total :</span>
            <span class="text-xl font-black">120 000 000.00 DA</span>
        </div>
        
        <div class="w-full flex flex-col gap-1">
            <span class="text-sm font-medium capitalize">reliquat :</span>
            <span class="text-xl font-black text-red-400">800 000.00 DA</span>
        </div>
    </div>       
    </div> 
    
    
  </div>
</template>

<script setup>
import { UilFilter } from '@iconscout/vue-unicons'
import FactItem from '@/components/tablesItems/FactItem.vue'
import { useCommandesStore } from '@/store'

const useCommandes = useCommandesStore()
</script>

<style>

</style>