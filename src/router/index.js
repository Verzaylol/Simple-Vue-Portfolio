import { createRouter, createWebHistory } from 'vue-router'
import HomeComp from '../components/HomeComp.vue'
import AboutComp from '../components/AboutComp.vue'
import PortfolioComp from '../components/PortfolioComp.vue'
import ContactComp from '../components/ContactComp.vue'
import Project1Comp from '../components/Project1Comp.vue'
import Project2Comp from '../components/Project2Comp.vue'
import Project3Comp from '../components/Project3Comp.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComp
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComp
  },
  {
    path: '/portfolio',
    name: 'PortfolioComp',
    component: PortfolioComp
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactComp
  },
  {
    path: '/project1',
    name: 'Project1',
    component: Project1Comp
  },
  {
    path: '/project2',
    name: 'Project2',
    component: Project2Comp
  },
  {
    path: '/project3',
    name: 'Project3',
    component: Project3Comp
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
