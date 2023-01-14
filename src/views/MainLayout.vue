<template>
  <div class="w-full h-screen bg-slate-100 relative">
    <SideBar/>
    <AddCommandes/>
    <AddReclamation/>
    

    <CommandesModal/>
    <BLModal/>
    <ReclamationModal/>
    <VenteModal/>

    <AddProduct/>

    <CommandesFilters/>
    <BLFilters/>
    <RCLMFilters/>
    <FactFilters/>
    <div class="w-full h-full flex gap-4 p-4">
        <div class="w-20 h-full flex-none"></div>
        <div class="grow h-full">
          <router-view/>
        </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from '@/components/bars/SideBar.vue'
import AddCommandes from '@/components/modals/AddCommandes.vue'
import CommandesModal from '@/components/modals/CommandesModal'
import ReclamationModal from '@/components/modals/ReclamationModal'
import BLModal from '@/components/modals/BLModal'
import CommandesFilters from '@/components/modals/CommandesFilters'
import BLFilters from '@/components/modals/BLFilters.vue'
import AddReclamation from '@/components/modals/AddReclamation.vue'
import RCLMFilters from '@/components/modals/RCLMFilters.vue'
import FactFilters from '@/components/modals/FactFilters.vue'
import AddProduct from '@/components/modals/AddProduct.vue'
import VenteModal from '@/components/modals/VenteModal'
</script>

<style>

</style>