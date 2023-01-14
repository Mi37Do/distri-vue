<template>
<input type="checkbox" id="AddProductModal" class="modal-toggle" />
<div class="modal bg-slate-900/60">
  <div class="modal-box h-[600px] w-[1200px] max-w-[1000px] flex flex-col gap-4">
    <h3 class="font-bold text-lg capitalize">Ajouter un produit</h3>

    <div class="w-full grow flex flex-col gap-4 overflow-auto">

        <div class="w-full flex gap-4">
        
        <div class="w-1/3 flex flex-col gap-1">
            <span class="capitalize">Type porte</span>
            <select class="select select-bordered w-full max-w-xs focus:outline-none">
            <option>PP</option>
            <option>PEM</option>
            <option>P.DV</option>
            <option>CF30</option>
            <option>CF60</option>
            <option>CF90</option>
            <option>P.TECH</option>
            </select>
        </div>

        <div class="w-1/3 flex flex-col gap-1">
            <span class="capitalize">Couleur</span>
            <select class="select select-bordered w-full max-w-xs focus:outline-none">
            <option>WENGUE</option>
            <option>CHÊNE</option>
            <option>ACAJOU</option>
            <option>JOPLIN</option>
            <option>BLANC</option>
            <option>AZABATCH</option>
            <option>TOSTADO</option>
            <option>STELA</option>
            </select>
        </div>

        <div class="w-1/3 flex flex-col gap-1">
            <span class="capitalize">Largeur ouvrant à préconiser</span>
            <select class="select select-bordered w-full max-w-xs focus:outline-none">
            <option>623</option>
            <option>723</option>
            <option>823</option>
            <option>923</option>
            <option>1023</option>
            <option>723+400</option>
            <option>823+400</option>
            <option>923+400</option>
            <option>723+723</option>
            <option>823+823</option>
            </select>
        </div>
        </div>

        <div class="w-full flex gap-4">
        <div class="w-1/3 flex flex-col gap-1">
            <span class="capitalize">Sens d'ouverture </span>
            <select class="select select-bordered w-full max-w-xs focus:outline-none">
            <option>Droit</option>
            <option>Gauche</option>
            <option>Sans sens</option>

            </select>
        </div>

        <div class="w-1/3 flex flex-col gap-1">
            <span class="capitalize">Cadre à préconiser </span>
            <select class="select select-bordered w-full max-w-xs focus:outline-none">
            <option>70</option>
            <option>100</option>
            <option>130</option>
            <option>160</option>
            </select>
        </div>

        <div class="w-1/3 flex flex-col gap-1">
            <span class="capitalize">Embouchure</span>
            <select class="select select-bordered w-full max-w-xs focus:outline-none">
            <option>72</option>
            <option>144</option>
            </select>
        </div>
        </div>

        <div class="w-full flex gap-4">
        <div class="w-1/3 flex flex-col gap-1">
            <span class="capitalize">serrure</span>
            <select class="select select-bordered w-full max-w-xs focus:outline-none">
            <option>sans serrue</option>
            <option>petite clé</option>
            <option>condamnation</option>
            <option>1PS</option>
            <option>3PS</option>
            <option>anti panique</option>
            <option>petite clé 30</option>
            <option>petite clé 60</option>
            <option>petite clé 90</option>
            </select>
        </div>

        <div class="w-1/3 flex flex-col gap-1">
            <span class="capitalize">motif</span>
            <select class="select select-bordered w-full max-w-xs focus:outline-none">
            <option>star</option>
            </select>
        </div>

        <div class="w-1/3 flex flex-col gap-1">
            <span class="capitalize">serrure</span>
            <select class="select select-bordered w-full max-w-xs focus:outline-none">
            <option>sans serrue</option>
            <option>petite clé</option>
            <option>condamnation</option>
            <option>1PS</option>
            <option>3PS</option>
            <option>anti panique</option>
            <option>petite clé 30</option>
            <option>petite clé 60</option>
            <option>petite clé 90</option>
            </select>
        </div>
        </div>

        <div class="w-full flex gap-4">
        

        <div class="w-1/3 flex flex-col gap-1">
            <span class="capitalize">motif</span>
            <select class="select select-bordered w-full max-w-xs focus:outline-none">
            <option>star</option>
            </select>
        </div>

        <div class="w-1/3 flex flex-col gap-1">
            <span class="capitalize">Protecteur</span>
            <select class="select select-bordered w-full max-w-xs focus:outline-none">
            <option>Non</option>
            <option>1 Face</option>
            <option>2 Faces</option>
            </select>
        </div>

        <div class="w-1/3 flex flex-col gap-1">
            <span class="capitalize">Ouverture
pour Vitrage</span>
            <select class="select select-bordered w-full max-w-xs focus:outline-none">
            <option>V.SP</option>
            </select>
        </div>

        </div>

        <div class="w-full flex gap-4">
        

        <div class="w-1/3 flex flex-col gap-1">
            <span class="capitalize">Grille d'aération </span>
            <select class="select select-bordered w-full max-w-xs focus:outline-none">
            <option>Grille</option>
            <option>Non</option>
            </select>
        </div>

        <div class="w-1/3 flex flex-col gap-1">
            <span class="capitalize">Arrêt de porte</span>
            <select class="select select-bordered w-full max-w-xs focus:outline-none">
            <option>Oui</option>
            <option>Non</option>
            </select>
        </div>

        <div class="w-1/3 flex flex-col gap-1">
            <span class="capitalize">pose</span>
            <select class="select select-bordered w-full max-w-xs focus:outline-none">
            <option>Oui</option>
            <option>Non</option>
            </select>
        </div>

        </div>

    </div>
    <div class="modal-action flex justify-between items-end">
       <div class="w-1/3 flex flex-col gap-1">
            <span class="capitalize">Qte</span>
            <input type="text" class="input input-bordered w-full max-w-xs focus:outline-none">
        </div>

        <div class="w-2/3 flex justify-end gap-2">
        <button class="btn rounded-xl capitalize btn-primary text-white">ajouter</button>
        <label for="AddProductModal" class="btn btn-ghost hover:bg-slate-100 border border-slate-300 hover:border-primary rounded-xl capitalize hover:text-primary">annuler</label>
        </div>
      
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>