<template>
  <div class="dropdown  dropdown-right dropdown-end">
  <label tabindex="0" class="btn btn-ghost border border-slate-200 hover:border-primary hover:bg-white rounded-xl flex gap-2 items-center relative transition-all duration-200" :class="{'justify-center': !useCommandes.sideBarOpen , 'justify-between' : useCommandes.sideBarOpen}">
        <span class="w-11 h-10 bg-white flex justify-center absolute rounded-xl left-0 z-10 items-center" :class="{'' : useCommandes.sideBarOpen}">
            <UilBell class="w-6 h-6"/>
        </span>
    <span class="transition-all duration-300 absolute right-4 delay-300 text-sm capitalize" :class="{'scale-0 delay-100' : !useCommandes.sideBarOpen,'scale-100': useCommandes.sideBarOpen}">notification</span>
  </label>
  <ul tabindex="0" class="dropdown-content menu p-2 overflow-auto shadow bg-base-100 rounded-2xl h-96 w-72 ml-6 noScrollBar">
    <div class="w-full h-full bg-white">
      <div class="w-full flex flex-col gap-2">
      <li v-for="i in 20" :key="i">
        <NotificationItem/>
      </li> 
      </div>
    </div>
    
    
  </ul>
</div>
</template>

<script setup>
import { useCommandesStore } from '@/store'
import { UilBell } from '@iconscout/vue-unicons'
import NotificationItem from './NotificationItem.vue'

const useCommandes = useCommandesStore()
</script>

<style>

</style>