<template>
  <input type="checkbox" id="VenteModal" class="modal-toggle" />
<div class="modal bg-slate-900/60">

  <div class="modal-box w-[1200px] flex flex-col gap-4 h-[700px] max-h-[700px] max-w-[1900px]">
    <h3 class="font-bold text-lg">BC-2000242</h3>
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
    
    <div class="modal-action">
      <label for="VenteModal" class="btn rounded-xl capitalize btn-primary text-white">editer</label>
      <label for="VenteModal" class="btn btn-ghost hover:bg-slate-100 border border-slate-300 hover:border-primary rounded-xl capitalize hover:text-primary">annuler</label>
    </div>
  </div>
</div>
</template>

<script setup>
import CommandesProductItem from '../tablesItems/CommandesProductItem.vue';
</script>

<style>

</style>