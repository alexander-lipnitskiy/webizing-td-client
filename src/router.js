import Vue from 'vue'
import Router from 'vue-router'

import ThingDetails from './components/ThingModel';
import ThingPropertyID from './components/ThingPropertiesID';
import ThingProperties from './components/ThingProperties';
import HomeForElderlyMap from './components/HomeForElderlyMap';
import IPCameraDashboard from './components/IPCameraDashboard';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/airQuality/model'
    },
    {
      path: '/dashboard',
      name: 'thing-properties-dashboard',
      component: HomeForElderlyMap
    },
    {
      path: '/ipCamera/dashboard',
      name: 'ipCamera-dashboard',
      component: IPCameraDashboard
    },
    {
      path: '/:thing/model',
      name: 'thing-model',
      component: ThingDetails
    },
    {
      path: '/:thing/properties',
      name: 'thing-properties',
      component: ThingProperties
    },
    {
      path: '/:thing/properties/:name',
      name: 'thing-properties-id',
      component: ThingPropertyID
    }
  ]
})
