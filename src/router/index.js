import Vue from 'vue'
import VueRouter from 'vue-router'
// import home from '@/views/home/index'
const Layout = () => import('@/views/layout')// 页面布局
const Home = () => import('@/views/home')// 首页
const Question = () => import('@/views/question')// 问答页面
const Video = () => import('@/views/video')// 视频页面
const User = () => import('@/views/user')// 用户页面
const Profile = () => import('@/views/user/profile')// 编辑页面
const Chat = () => import('@/views/user/chat')// 小智
const Login = () => import('@/views/login')// 登录
const Article = () => import('@/views/article')// 文章
const Search = () => import('@/views/search')// 文章
const Result = () => import('@/views/search/result')// 文章

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout, // 一级路由
    children: [
      { path: '/', component: Home }, // 二级路由，首页
      { path: '/question', component: Question }, // 二级路由，问答
      { path: '/video', component: Video }, // 二级路由，视频组件
      { path: '/user', component: User } // 二级路由，用户组件
    ]
  },
  { path: '/user/profile', component: Profile }, // 一级路由，编辑
  { path: '/user/chat', component: Chat }, // 一级路由，小智
  { path: '/login', component: Login }, // 一级路由，登录
  { path: '/article', component: Article }, // 一级路由，登录
  { path: '/search', component: Search }, // 一级路由,搜索
  { path: '/search/result', component: Result } // 一级路由,搜索文章
]

const router = new VueRouter({
  routes
})

export default router
