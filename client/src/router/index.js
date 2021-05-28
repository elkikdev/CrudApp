import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import AddUser from '../pages/AddUser.vue'
import UpdateUser from '../pages/UpdateUser.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/addUser',
      name: 'AddUser',
      props: true,
      component: AddUser,

    },
    {
      path: '/updateUser/:id',
      name: 'UpdateUser',
      props: true,
      component: UpdateUser,

    }
  ]
})
