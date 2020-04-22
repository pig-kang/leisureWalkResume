import Vue from 'vue'
import Router from 'vue-router'
import CommonPage from '../components/common/commonPage.vue'
import index from '../views/index.vue'

Vue.use(Router)

const login = resolve => require(['../views/login.vue'], resolve)
const register = resolve => require(['../views/register.vue'], resolve)
const strategy = resolve => require(['../views/strategy.vue'], resolve)
const myResumeEdite = resolve => require(['../views/myResumeEdite.vue'], resolve)
const myResume = resolve => require(['../views/myResume.vue'], resolve)
const ploblemFeedback = resolve => require(['../views/ploblemFeedback.vue'], resolve)
const setting = resolve => require(['../views/setting.vue'], resolve)
const amendResume = resolve => require(['../views/amendResume.vue'], resolve)
const strategyView = resolve => require(['../views/strategyView.vue'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      component: CommonPage,
      children: [
        {
          path: '/',
          name: 'index',
          component: index
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
	  path: '/strategy',
	  component: CommonPage,
	  children: [
	    {
	      path: '/',
	      name: 'strategy',
	      component: strategy
	    }
	  ]
    },
    {
      path: '/myResumeEdite/:id',
      component: CommonPage,
      children: [
        {
          path: 'edite',
          name: 'myResumeEdite',
          component: myResumeEdite
        }
      ]
    },
    {
      path: '/myResume',
      component: CommonPage,
      children: [
        {
          path: '/',
          name: 'myResume',
          component: myResume
        }
      ]
    },
    {
      path: '/ploblemFeedback',
      name: 'ploblemFeedback',
      component: ploblemFeedback,
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting,
    },
    {
      path: '/amendResume',
      component: CommonPage,
      children: [
        {
          path: '/',
          name: 'amendResume',
          component: amendResume
        }
      ]
    },
    {
      path: '/strategyView',
      component: CommonPage,
      children: [
        {
          path: '/',
          name: 'strategyView',
          component: strategyView
        }
      ]
    }
  ]
})
