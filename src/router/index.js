import { createRouter, createWebHistory } from 'vue-router'
//import views裡面的userview todoview
import UserView from '../views/UserView.vue'
import TodoView from '../views/TodoView.vue'

const routes = [
  {
    path: '/users/:userId',
    component: UserView,
    children: [
      {
        path: 'todos',
        component: TodoView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
