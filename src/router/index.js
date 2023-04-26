import { createRouter, createWebHistory } from 'vue-router'
import AccountView from '../views/AccountView.vue'
import AuthDialog from "../components/AuthDialog.vue";
import TheoryView from "../views/TheoryView.vue";
import LevelMap from "../views/LevelMap.vue";
import LevelPage from "../views/LevelPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/account',
      name: 'account',
      component: AccountView,
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthDialog,
    },
    {
      path: '/theory',
      name: 'theory',
      component: TheoryView,
    },
    {
      path: '/levels',
      name: 'levels',
      component: LevelMap,
    },
    {
      path: '/level/:id',
      name: 'level',
      component: LevelPage,
    },
  ]
})

export default router
