<template>
  <div class="w-fit h-screen absolute z-20">
    <div class="h-full relative transition-all" :class="{'w-fit delay-300': !useCommandes.sideBarOpen , 'w-screen' : useCommandes.sideBarOpen}">
    <button @click="useCommandes.sideBarOpen = false" class="h-full absolute bg-slate-900/60 transition-all duration-500 delay-200" :class="{'w-fit opacity-0 scale-60' : !useCommandes.sideBarOpen, 'w-full opacity-100 scale-100' : useCommandes.sideBarOpen}">
      
    </button>
    <div class="w-fit h-full p-4 sticky">
        <div class="h-full bg-white border border-slate-200 flex flex-col gap-4 rounded-2xl transition-all duration-500 p-4" :class="{'w-20 delay-200' : !useCommandes.sideBarOpen, 'w-60' : useCommandes.sideBarOpen}">
            <button @click="useCommandes.sideBarOpen = !useCommandes.sideBarOpen" class="btn btn-square btn-ghost border border-slate-200 hover:border-primary hover:bg-white rounded-xl flex gap-2 items-center relative">
              <img src="@/assets/logo.svg" class="w-6 h-6">
            </button>


            <nav class="w-full grow flex flex-col justify-center gap-4 text-slate-300">

              <router-link @click="useCommandes.sideBarOpen = false" to="dashboard" class="btn btn-ghost border border-slate-200 hover:border-primary hover:bg-white rounded-xl flex gap-2 items-center relative transition-all duration-200" :class="{'justify-center': !useCommandes.sideBarOpen , 'justify-between' : useCommandes.sideBarOpen}">
                <span class="w-11 h-10 bg-white flex justify-center absolute transition-all rounded-xl left-0 z-10 items-center" :class="{'' : useCommandes.sideBarOpen}">
                  <UilApps class="w-6 h-6"/>
                  </span>
                <span class="transition-all duration-300 absolute right-4 delay-300 text-sm capitalize" :class="{'scale-0 delay-100' : !useCommandes.sideBarOpen,'scale-100': ideBarOpen}">dashboard</span>
              </router-link>

              <router-link @click="useCommandes.sideBarOpen = false" to="commandes" class="btn btn-ghost border border-slate-200 hover:border-primary hover:bg-white rounded-xl flex gap-2 items-center relative transition-all duration-200" :class="{'justify-center': !useCommandes.sideBarOpen , 'justify-between' : useCommandes.sideBarOpen}">
                <span class="w-11 h-10 bg-white flex justify-center absolute rounded-xl left-0 z-10 items-center" :class="{'' : useCommandes.sideBarOpen}">
                  <UilParcel  class="w-6 h-6"/>
                  </span>
                <span class="transition-all duration-300 absolute right-4 delay-300 text-sm capitalize" :class="{'scale-0 delay-100' : !useCommandes.sideBarOpen,'scale-100': ideBarOpen}">commandes</span>
              </router-link>

              <router-link @click="useCommandes.sideBarOpen = false" to="bills" class="btn btn-ghost border border-slate-200 hover:border-primary hover:bg-white rounded-xl flex gap-2 items-center relative transition-all duration-200" :class="{'justify-center': !useCommandes.sideBarOpen , 'justify-between' : useCommandes.sideBarOpen}">
                <span class="w-11 h-10 bg-white flex justify-center absolute rounded-xl left-0 z-10 items-center" :class="{'' : useCommandes.sideBarOpen}">
                  <UilReceipt class="w-6 h-6"/>
                  </span>
                <span class="transition-all duration-300 delay-300 absolute right-4 text-sm capitalize" :class="{'scale-0 delay-100' : !useCommandes.sideBarOpen,'scale-100': ideBarOpen}">factures</span>
              </router-link>

              <router-link @click="useCommandes.sideBarOpen = false" to="réclamations" class="btn btn-ghost border border-slate-200 hover:border-primary hover:bg-white rounded-xl flex gap-2 items-center relative transition-all duration-200" :class="{'justify-center': !useCommandes.sideBarOpen , 'justify-between' : useCommandes.sideBarOpen}">
                <span class="w-11 h-10 bg-white flex justify-center absolute rounded-xl left-0 z-10 items-center" :class="{'' : useCommandes.sideBarOpen}">
                  <UilInfoCircle class="w-6 h-6"/>
                  </span>
                <span class="transition-all duration-300 delay-300 absolute right-4 text-sm capitalize" :class="{'scale-0 delay-100' : !useCommandes.sideBarOpen,'scale-100': useCommandes.sideBarOpen}">réclamation</span>
              </router-link>

            </nav>

            

            <div class="w-full flex flex-col gap-4">

              <router-link to="/ventes" class="btn btn-primary rounded-xl flex gap-2 items-center relative text-white transition-all duration-200" :class="{'justify-center': !useCommandes.sideBarOpen , 'justify-between' : useCommandes.sideBarOpen}">
                <span class="w-11 h-10 flex justify-center absolute rounded-xl left-0 z-10 items-center" :class="{'' : useCommandes.sideBarOpen}">
                  <UilPlus class="w-6 h-6"/>
                  </span>
                <span class="transition-all duration-300 absolute right-4 delay-300 text-sm capitalize" :class="{'scale-0 delay-100' : !useCommandes.sideBarOpen,'scale-100': useCommandes.sideBarOpen}">ventes</span>
              </router-link>

              <Notifications/>

              <button class="btn btn-ghost border border-slate-200 hover:border-primary hover:bg-white rounded-xl flex gap-2 items-center relative transition-all duration-200" :class="{'justify-center': !useCommandes.sideBarOpen , 'justify-between' : useCommandes.sideBarOpen}">
                <span class="w-11 h-10 bg-white flex justify-center absolute rounded-xl left-0 z-10 items-center" :class="{'' : useCommandes.sideBarOpen}">
                  <UilSignout class="w-6 h-6"/>
                  </span>
                <span class="transition-all duration-300 delay-300 absolute right-4 text-sm capitalize" :class="{'scale-0 delay-100' : !useCommandes.sideBarOpen,'scale-100': useCommandes.sideBarOpen}">se déconnecter</span>
              </button>

            </div>
        </div>
    </div>
        
    </div>
  </div>
</template>

<script setup>
import { useCommandesStore } from '@/store';
import { UilBell,UilSignout,UilPlus , UilApps,UilReceipt,UilUsdCircle,UilParcel,UilInfoCircle  } from '@iconscout/vue-unicons'
import Notifications from './Notifications.vue'
const { ref }=require("vue-demi");

const useCommandes = useCommandesStore()
const sideBarOpen = ref(false)
</script>

<style  lang="scss">
nav {
  a {
    color: #cbd5e1;
    &.router-link-exact-active {
      color: #073f5c;
    }
  }
}
</style>