<template>
  <input type="checkbox" id="CmdFilters" class="modal-toggle" />
<div class="modal bg-slate-900/60">
  <div class="modal-box rounded-2xl">
    <div class="flex h-96 flex-col gap-4">
        <div class="w-full flex flex-col gap-2">
            <label for="searchCmd" class="text-sm font-medium capitalize">recherche</label>
            <input type="text" class="input  input-bordered rounded-lg border px-2 py-1 w-full focus:outline-none focus:border-indigo-300">
        </div>
        <DateRange/>
    </div>
    
    <div class="modal-action">
      <label for="CmdFilters" class="btn btn-primary text-white rounded-xl capitalize">filtrer</label>
      <label for="CmdFilters" class="btn btn-ghost hover:bg-slate-100 border border-slate-300 hover:border-primary rounded-xl capitalize hover:text-primary">annuler</label>
    </div>
  </div>
</div>
</template>

<script setup>
import DateRange from '../FiltersComponents/DateRange.vue'
</script>

<style>

</style>