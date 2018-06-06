import Vue from 'vue'
import Router from 'vue-router'
import AttendModel from '@/views/AttendModel'
import AwaitModel from '@/views/AwaitModel'
import FreeStudy from '@/views/FreeStudy'
import Association from '@/views/Association'
import library from '@/views/library'
import OtherClassRoom from '@/views/OtherClassRoom'
import Recommend from '@/views/Recommend'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/terminal-inline'
    },
    {
      path: '*',
      redirect: '/main/AttendModel'
    },
    {
      path: '/main/AttendModel',
      name: 'AttendModel',
      component: AttendModel
    },
    {
      path: '/main/AwaitModel',
      name: 'AwaitModel',
      component: AwaitModel
    },
    {
      path: '/main/FreeStudy',
      name: 'FreeStudy',
      component: FreeStudy
    },
    {
      path: '/main/Association',
      name: 'Association',
      component: Association
    },
    {
      path: '/main/library',
      name: 'library',
      component: library
    },
    {
      path: '/main/OtherClassRoom',
      name: 'OtherClassRoom',
      component: OtherClassRoom
    },
    {
      path: '/main/Recommend',
      name: 'Recommend',
      component: Recommend
    }
  ]
})
