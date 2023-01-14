<template>
  <div class="w-full h-full absolute z-50" :class="{'invisible' : !useCommandes.addCommandesModal, 'visible' : useCommandes.addCommandesModal}">
    <div class="w-full h-full relative">
        <div 
        @click="useCommandes.addCommandesModal = false" 
        class="w-full h-full bg-slate-900/60 absolute transition-all duration-500"  
        :class="{'opacity-0' : !useCommandes.addCommandesModal, 'opacity-100' : useCommandes.addCommandesModal}"></div>
        <div class="w-full h-full p-4 absolute">
            <div class="h-full bg-white rounded-2xl transition-all delay-200 duration-500 p-4 flex flex-col gap-4" :class="{'w-1' : !useCommandes.addCommandesModal, 'w-[1200px]' : useCommandes.addCommandesModal}">
                <div class="w-full h-full flex flex-col gap-4 transition-all" :class="{'opacity-0 delay-100 duration-100' : !useCommandes.addCommandesModal, 'opacity-100 duration-500 delay-500' : useCommandes.addCommandesModal}">
                 <div class="w-full flex items-center justify-between">
                    <span class="text-xl font-black capitalize text-primary">Ajouter commandes</span>
                    <button @click="useCommandes.addCommandesModal = false"  class="btn btn-ghost btn-square rounded-xl text-slate-600 hover:text-primary hover:bg-slate-100 border border-slate-300 hover:border-primary">
                        <UilTimes class="w-6 h-6"/>
                    </button>
                </div>  
                <div class="w-full grow bg-slate-200/50 border border-slate-2 flex flex-col rounded-xl overflow-hidden">
                <div class="w-full h-14 bg-primary rounded-t-xl text-sm flex-none pl-8 pr-5 grid grid-cols-5 gap-4 text-white font-semibold">
                    <span class="h-full flex items-center capatlize">produit</span>
                    <span class="h-full flex items-center capitalize">type</span>
                    <span class="h-full flex items-center capitalize">Prix unitaire</span>
                    <span class="h-full flex items-center capitalize">Qte</span>
                    <span class="h-full flex items-center capitalize">total</span>
                    
                </div>

                <div class="w-full grow overflow-auto">
                    <div class="w-full h-full flex flex-col gap-2 p-2">
                        <CommandesProductItem/>
                    </div>
                </div>
                <div class="flex-none">
                   <div class="w-full bg-slate-100 flex justify-between items-center p-2">
                    <span class="text-xl font-black text-slate-500">total : 140 000 000 DA</span>
                    <label  for="AddProductModal" class="btn rounded-lg capitalize btn-primary text-white">ajouter un produit</label>
                    </div> 
                </div>
                
            </div>


                <div class="w-full flex gap-2 justify-end">
                    <button class="btn rounded-xl capitalize btn-primary text-white">ajouter</button>
                    <button 
                     @click="useCommandes.addCommandesModal = false" 
                    class="btn btn-ghost hover:bg-slate-100 border border-slate-300 hover:border-primary rounded-xl capitalize hover:text-primary">annuler</button>
                </div>

                </div>

                
                
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import CommandesProductItem from '../tablesItems/CommandesProductItem.vue';
import { UilTimes } from '@iconscout/vue-unicons'
const { useCommandesStore }=require("@/store");

const useCommandes = useCommandesStore()
</script>

<style>

</style>