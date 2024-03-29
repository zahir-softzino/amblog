import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from '@/views/Details.vue'
import CreatePost from '@/components/CreatePost.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create_post',
    name: 'Create Post',
    component: CreatePost
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
