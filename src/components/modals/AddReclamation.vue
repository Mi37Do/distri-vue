<template>
  <div class="w-full h-full absolute z-50" :class="{'invisible' : !useReclamations.addReclamationModal, 'visible' : useReclamations.addReclamationModal}">
    <div class="w-full h-full relative">
        <div 
        @click="useReclamations.addReclamationModal = false" 
        class="w-full h-full bg-slate-900/60 absolute transition-all duration-500"  
        :class="{'opacity-0' : !useReclamations.addReclamationModal, 'opacity-100' : useReclamations.addReclamationModal}"></div>
        <div class="w-full h-full p-4 absolute">
            <div class="h-full bg-white rounded-2xl transition-all delay-200 duration-500 p-4 flex flex-col gap-4" :class="{'w-1' : !useReclamations.addReclamationModal, 'w-[400px]' : useReclamations.addReclamationModal}">
                <div class="w-full h-full flex flex-col gap-4 transition-all" :class="{'opacity-0 delay-100 duration-100' : !useReclamations.addReclamationModal, 'opacity-100 duration-500 delay-500' : useReclamations.addReclamationModal}">
                 <div class="w-full flex items-center justify-between">
                    <span class="text-xl font-black capitalize text-primary">Ajouter réclamation</span>
                    <button @click="useReclamations.addReclamationModal = false"  class="btn btn-ghost btn-square rounded-xl text-slate-600 hover:text-primary hover:bg-slate-100 border border-slate-300 hover:border-primary">
                        <UilTimes class="w-6 h-6"/>
                    </button>
                </div>  
                <div class="w-full grow flex flex-col gap-4 overflow-hidden px-2">
                    <div class="w-full flex flex-col gap-2">
                        <span class="text-sm font-medium capitalize">type</span>
                        <select class="select input-bordered rounded-lg border px-2 py-1 w-full focus:outline-none focus:border-indigo-300">
                            <option disabled selected>choisie le type de votre réclamation</option>
                            <option>fabrication</option>
                            <option>transport</option>
                            <option>marketing</option>
                            </select>
                    </div>

                    <div class="w-full flex flex-col gap-2">
                        <span class="text-sm font-medium capitalize">description</span>
                        <textarea maxlength="500" rows="10" class="textarea input-bordered rounded-lg border px-2 py-1 w-full focus:outline-none focus:border-indigo-300"></textarea>
                        
                    </div>
                </div>


                <div class="w-full flex gap-2 justify-end">
                    <button class="btn rounded-xl capitalize btn-primary text-white">ajouter</button>
                    <button 
                     @click="useReclamations.addReclamationModal = false" 
                    class="btn btn-ghost hover:bg-slate-100 border border-slate-300 hover:border-primary rounded-xl capitalize hover:text-primary">annuler</button>
                </div>

                </div>

                
                
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { UilTimes } from '@iconscout/vue-unicons'
import { useReclamationsStore } from '@/store'

const useReclamations = useReclamationsStore()
</script>

<style>

</style>