import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import(/* webpackChunkName: "about" */ '../views/Customer.vue')
  },
  {
    path: '/employee',
    name: 'employee',
    component: () => import(/* webpackChunkName: "about" */ '../views/Employee.vue')
  },
  {
    path: '/add_customer',
    name: 'add_customer',
    component: () => import(/* webpackChunkName: "about" */ '../views/Add_Customer.vue')
  },
  {
    path: '/add_employee',
    name: 'add_employee',
    component: () => import(/* webpackChunkName: "about" */ '../views/Add_Employee.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/contact.vue')
  },
  {
    path: '/add_contact',
    name: 'add_contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Add_Contact.vue')
  },
  {
    path: '/customer_crud',
    name: 'customer_crud',
    component: () => import(/* webpackChunkName: "about" */ '../views/Customer_crud.vue')
  },
  {
    path: '/employee_crud',
    name: 'employee_crud',
    component: () => import(/* webpackChunkName: "about" */ '../views/Employee_crud.vue')
  },
  {
    path: '/contact_crud',
    name: 'contact_crud',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact_crud.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
  },
  {
    path: '/show_product',
    name: 'show_product',
    component: () => import(/* webpackChunkName: "about" */ '../views/Show_product.vue')
  },
  {
    path: '/asset',
    name: 'asset',
    component: () => import(/* webpackChunkName: "about" */ '../views/Asset.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
