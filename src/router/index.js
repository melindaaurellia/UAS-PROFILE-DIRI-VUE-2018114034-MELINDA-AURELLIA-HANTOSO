import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Profiles/Home.vue'
import Profiles from '../views/Profiles/Profiles.vue'
import Editprofiles from '../views/Profiles/Editprofiles.vue'
import Pendidikans from '../views/Pendidikans/Pendidikans.vue'
import Editpendidikans from '../views/Pendidikans/Editpendidikans.vue'
import Works from '../views/Works/Works.vue'
import Editworks from '../views/Works/Editworks.vue'
import Kontaks from '../views/Kontaks/Kontaks.vue'
import Editkontaks from '../views/Kontaks/Editkontaks.vue'


const routes = [
 
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profiles',
    name: 'Profiles',
    component: Profiles
  },

  {
    path: '/editprofiles/:id',
    name: 'Editprofiles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editprofiles
  },
  
  {
    path: '/pendidikans',
    name: 'Pendidikans',
    component: Pendidikans
  },
  
  {
    path: '/editpendidikans/:id',
    name: 'Editpendidikans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editpendidikans
  },

  {
    path: '/works',
    name: 'Works',
    component: Works
  },
 
  {
    path: '/editworks/:id',
    name: 'Editworks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editworks
  },

  {
    path: '/Kontaks',
    name: 'Kontaks',
    component: Kontaks
  },
  
  {
    path: '/editkontaks/:id',
    name: 'Editkontaks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editkontaks
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
