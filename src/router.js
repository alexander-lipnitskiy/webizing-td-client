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
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/td/:thing',
      name: 'thing-details',
      component: ThingDetails
    },
    {
      path: '/td/:thing/property/:name',
      name: 'thing-property-details',
      component: ThingDetails
    }
    // {
    //   path: '/thing-property-details',
    //   name: 'thing-property-details',
    //   component: ThingPropertyDetails
    // }
  ]
})
