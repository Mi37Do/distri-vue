<template>
<input type="checkbox" id="RCLMFilters" class="modal-toggle" />
<div class="modal bg-slate-900/60">
  <div class="modal-box w-[500px] rounded-2xl">
    <div class="flex w-full h-[400px] flex-col gap-4">
        <div class="w-full flex flex-col gap-2">
            <label for="searchCmd" class="text-sm font-medium capitalize">recherche</label>
            <input type="text" class="input input-bordered rounded-lg border px-2 py-1 w-full focus:outline-none focus:border-indigo-300">
        </div>
        <div class="w-full flex flex-col gap-3">
            <span class="text-base font-semibold capitalize">date</span>
            <DateRange/>   
        </div>

        <div class="w-full flex flex-col gap-2">
                        <span class="text-sm font-medium capitalize">type</span>
                        <select class="select input-bordered rounded-lg border px-2 py-1 w-full focus:outline-none focus:border-indigo-300">
                            <option disabled selected>choisie le type de votre réclamation</option>
                            <option>fabrication</option>
                            <option>transport</option>
                            <option>marketing</option>
                        </select>
        </div>
        
    </div>
    
    <div class="modal-action">
      <label for="RCLMFilters" class="btn btn-primary text-white rounded-xl capitalize">filtrer</label>
      <label for="RCLMFilters" class="btn btn-ghost hover:bg-slate-100 border border-slate-300 hover:border-primary rounded-xl capitalize hover:text-primary">annuler</label>
    </div>
  </div>
</div>
</template>

<script setup>
import DateRange from '../FiltersComponents/DateRange.vue'
</script>

<style>

</style>