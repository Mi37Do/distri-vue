import { defineStore } from 'pinia'

export const useCommandesStore = defineStore('commandes', {
  state: () => ({ 
    addCommandesModal: false,
    sideBarOpen : false,
   }),
  getters: {
    
  },
  actions: {
    
  },
})


export const useVentesStore = defineStore('ventes', {
  state: () => ({ 
    addSaleModal: false,
    sideBarOpen : false,
   }),
  getters: {
    
  },
  actions: {
    
  },
})

export const useReclamationsStore = defineStore('reclamations', {
  state: () => ({ 
    addReclamationModal: false,
    sideBarOpen : false,
   }),
  getters: {
    
  },
  actions: {
    
  },
})