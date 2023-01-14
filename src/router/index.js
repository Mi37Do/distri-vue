import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../views/MainLayout.vue'
import DashboardView from '@/views/pages/DashboardView.vue'
import CommandesView from '@/views/pages/CommandesView.vue'
import BillsView from '@/views/pages/BillsView.vue'
import Reclamations from '@/views/pages/ReclamationsView.vue'
import LivraisonView from '@/views/pages/LivraisonView.vue'
import VentesView from '@/views/pages/VentesView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainLayout,
    redirect:'dashboard',
    children:[{
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/commandes',
      name: 'commandes',
      component: CommandesView
    },
    {
      path: '/bills',
      name: 'bills',
      component: BillsView
    },
    {
      path: '/réclamations',
      name: 'réclamations',
      component: Reclamations
    },
    {
      path: '/bdl',
      name: 'bon de livraison',
      component: LivraisonView
    }
    ,
    {
      path: '/ventes',
      name: 'ventes',
      component: VentesView
    }
  ] /***/
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
