import Vue from 'vue'
import Router from 'vue-router'

import ThingDetails from './components/ThingDetails';
import ThingPropertyDetails from './components/ThingPropertyDetails';
import Index from './components/Index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/td',
      name: 'index',
      component: Index
    },
    {
      path: '/td/:thing',
      name: 'thing-details',
      component: ThingDetails
    },
    {
      path: '/td/:thing/:name',
      name: 'thing-property-details',
      component: ThingPropertyDetails
    }
  ]
})
