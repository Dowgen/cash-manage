import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout'

Vue.use(Router)

/**
* icon : the icon show in the sidebar
* hidden : if `hidden:true` will not show in the sidebar
* redirect : if `redirect:noredirect` will not redirct in the levelbar
* noDropdown : if `noDropdown:true` will not has submenu in the sidebar
* meta : `{ role: ['admin'] }`  will control the page role
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  },

  {
    path: '/reportForm',
    component: Layout,
    redirect: 'noredirect',
    name: '大数据报表',
    icon: 'table',
    children: [
      {
        path: '/reportForm/operation',
        component: _import('reportForm/operation/index'),
        redirect: 'noredirect',
        name: '运营报表',
        children: [
          { path: 'number', name: '数量分析', icon: 'zonghe', component: _import('reportForm/operation/number') },
          { path: 'ratio', name: '比率分析', icon: 'zonghe', component: _import('reportForm/operation/ratio') },
          { path: 'trend', name: '趋势分析', icon: 'zonghe', component: _import('reportForm/operation/trend') }
        ]
      },
      {
        path: '/reportForm/riskManage',
        component: _import('reportForm/riskManage/index'),
        redirect: 'noredirect',
        name: '风控报表',
        children: [
          { path: 'customerRisk', name: '客户风险分析', icon: 'zonghe', component: _import('reportForm/riskManage/customerRisk') },
          { path: 'overdueAmount', name: '逾期金额分析', icon: 'zonghe', component: _import('reportForm/riskManage/overdueAmount') },
          { path: 'overdueRatio', name: '逾期比率分析', icon: 'zonghe', component: _import('reportForm/riskManage/overdueRatio') },
          { path: 'hurryCollect', name: '催收情况分析', icon: 'zonghe', component: _import('reportForm/riskManage/hurryCollect') },
          { path: 'ruleAudit', name: '规则审核分析', icon: 'zonghe', component: _import('reportForm/riskManage/ruleAudit') },
          { path: 'riskControlDistribution', name: '风控分布分析', icon: 'zonghe', component: _import('reportForm/riskManage/riskControlDistribution') }
        ]
      }
    ]
  },

  {
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    icon: 'tubiao',
    noDropdown: true,
    children: [{ path: 'index', name: 'Table', component: _import('table/index'), meta: { role: ['admin'] }}]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

