import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Contacts from '@/components/contacts/Contacts.vue'
import Details from '@/components/details/Details.vue'
import User from '@/components/user/User.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/contacts'
  }, {
    path: '/',
    name: 'home',
    component: Home,
    children: [{
      name: 'contacts',
      path: 'contacts',
      component: Contacts,
      meta: {
        title: 'Contatos'
      }
    }, {
      name: 'details',
      path: 'details',
      component: Details,
      meta: {
        title: 'Detalhes'
      }
    }, {
      name: 'user',
      path: 'user',
      component: User,
      meta: {
        title: 'Usuário'
      }
    }]
  }]
})
