<template>
    <div class="w-full h-14 bg-white border border-slate-200 hover:border-primary transition-all duration-300 rounded-lg flex-none">
      <div class="w-full h-full flex items-center pl-4 pr-1">
        <div class="w-full grid grid-cols-5 gap-4 text-xs font-semibold cursor-pointer">
          <span class="h-full flex items-center capitalize">{{CommandeProduct.produit}}</span>
          <span class="h-full flex items-center capitalize">{{CommandeProduct.type}}</span>
          <span class="h-full flex items-center">{{CommandeProduct.prix_u}} DA</span>
          <input type="number" v-model="CommandeProduct.qty" class="input text-xs font-semibold input-bordered h-10 rounded-md focus:outline-none my-auto">
          <div class="w-full flex justify-between">
            <span class="h-full flex items-center">{{CommandeProduct.prix_u * CommandeProduct.qty}} DA</span>
            <button class="btn btn-square btn-ghost text-slate-400 hover:bg-slate-100 rounded-md hover:text-red-400">
              <UilTimes class="w-6 h-6"/>
            </button>
          </div>
          
        </div>
        
      </div>
      
    </div>
  </template>
  
<script setup>
  import { UilTimes } from '@iconscout/vue-unicons'
import { reactive, ref } from 'vue-demi'

const CommandeProduct = ref({
    produit:'porte de passage',
    type:'porte',
    prix_u : 26000,
    qty: 1,
    total: 0
  })

const qty = ref(0)
</script>
  
  <style>
  
  </style>