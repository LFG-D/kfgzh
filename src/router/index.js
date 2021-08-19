import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Register from '@/components/LFG/Register'
import Will from '@/components/LFG/Will'

import ccgz from '@/components/LDM/ccgz'

import frwt from '@/components/LZL/frwt'
import grbl from '@/components/LZL/grbl'
import gzsx from '@/components/LZL/gzsx'

import AA from "../components/LXT/xuzhi/AA";
import BB from "../components/LXT/ziliao/BB";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/Register',
      name: 'Register',
      component: Register
    },

    {
      path: '/Will',
      name: 'Will',
      component: Will
    },

    {
      path: '/ccgz',
      name: 'ccgz',
      component: ccgz
    },

    {
      path: '/grbl',
      name: 'grbl',
      component: grbl
    },
    {
      path: '/frwt',
      name: 'frwt',
      component: frwt
    },
    {
      path: '/gzsx',
      name: 'gzsx',
      component: gzsx
    },

    {
      path: '/AA',
      name: 'AA',
      component: AA
    },
    {
      path: '/BB',
      name: 'BB',
      component: BB
    }
  ]

})
