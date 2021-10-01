import Vue from 'vue'
import Router from 'vue-router'

import ThingDetails from './components/ThingModel';
import ThingPropertyID from './components/ThingPropertiesID';
import ThingProperties from './components/ThingProperties';
import HomeForElderlyMap from './components/HomeForElderlyMap';
import IPCameraDashboard from './components/IPCameraDashboard';
import TDConfiguration from './components/TDConfiguration';
// import Dashboard from './components/Dashboard';

Vue.use(Router);

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/thing/airQuality'
    },
    // {
    //   path: '/rapberry-pi/dashboard',
    //   name: 'Dashboard',
    //   component: Dashboard
    // },
    // {
    //   path: '/orbitdb-dashboard',
    //   name: 'orbitdb-dash',
    //   component: OrbitdbDash
    // },
    {
      path: '/thing/dashboard',
      name: 'thing-properties-dashboard',
      component: HomeForElderlyMap
    },
    {
      path: '/thing/ipCamera/dashboard',
      name: 'ipCamera-dashboard',
      component: IPCameraDashboard
    },
    {
      path: '/thing/:thing',
      name: 'thing-model',
      component: ThingDetails
    },
    {
      path: '/thing/:thing/properties',
      name: 'thing-properties',
      component: ThingProperties
    },
    {
      path: '/thing/:thing/properties/:name',
      name: 'thing-properties-id',
      component: ThingPropertyID
    },
    {
      path: '/settings',
      name: 'td-configuration',
      component: TDConfiguration
    }
  ]
})
