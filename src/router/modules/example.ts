import type { RouteRecordRaw } from 'vue-router'
import { iconifyRender } from '@/utils'
import layout from '../../layouts/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: layout,
    meta: {
      isRoot: true,
      icon: iconifyRender('tabler:home'),
    },
    children: [
      {
        path: '',
        name: 'home-index',
        component: () => import('@/views/example/HomePage.vue'),
        meta: {
          title: 'primeira página',
        },
      },
    ],
  },
  {
    path: '/comp',
    name: 'comp',
    component: layout,
    meta: {
      title: 'Instância do componente',
      icon: iconifyRender('icon-park-outline:figma-component'),
    },
    children: [
      {
        path: 'keep-alive',
        name: 'KeepAlive',
        component: () => import('@/views/example/KeepAlive.vue'),
        meta: {
          title: 'Cache do componente',
          keepAlive: true,
          icon: iconifyRender('icon-park-outline:figma-component'),
        },
      },
      {
        path: 'un-keep-alive',
        name: 'UnKeepAlive',
        component: () => import('@/views/example/UnKeep.vue'),
        meta: {
          title: 'O componente não cache',
          icon: iconifyRender('icon-park-outline:figma-component'),
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: layout,
    meta: {
      icon: iconifyRender('tabler:info-circle'),
      title: 'cerca de',
    },
    children: [
      {
        path: 'project',
        name: 'AboutProject',
        component: () => import('@/views/example/AboutProject.vue'),
        meta: {
          title: 'Sobre projetos',
          icon: iconifyRender('tabler:stack-2'),
        },
      },
      {
        path: 'author',
        name: 'AboutAuthor',
        component: () => import('@/views/example/AboutAuthor.vue'),
        meta: {
          title: 'Sobre o autor',
          icon: iconifyRender('tabler:user-circle'),
        },
      },
    ],
  },
  {
    path: '/blog',
    name: 'https://wyatex.gitee.io',
    component: layout,
    meta: {
      title: 'Blog de autor',
      icon: iconifyRender('jam:blogger-circle'),
      isRoot: true,
    },
  },
]

export default routes
