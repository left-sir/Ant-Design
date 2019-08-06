import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/nav/First'
import table from '@/components/Table/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'First',
      component: First
    }
    ,
    {
      path: '/table',
      name: 'table',
      component: table
    }
  ]
})
