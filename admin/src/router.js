import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import ArticleEdit from './views/ArticleEdit.vue'
import ArticleList from './views/ArticleList.vue'
import PortfolioEdit from './views/PortfolioEdit.vue'
import PortfolioList from './views/PortfolioList.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect: '/articles/create',
      children: [
        { path: '/articles/create', component: ArticleEdit },
        { path: '/articles/edit/:id', component: ArticleEdit, props: true },
        { path: '/articles/list', component: ArticleList },
        { path: '/portfolios/create', component: PortfolioEdit },
        { path: '/portfolios/edit/:id', component: PortfolioEdit, props: true },
        { path: '/portfolios/list', component: PortfolioList },
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})

export default router
