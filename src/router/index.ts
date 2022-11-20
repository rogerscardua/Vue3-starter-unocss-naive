import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createGuard } from './guard'

// Dinâmico do diretório de módulos para o roteamento
const modules = import.meta.globEager('./modules/**/*.ts')
const routeModuleList: RouteRecordRaw[] = []

Object.keys(modules).forEach(key => {
  const module = modules[key].default || {}
  const modList = Array.isArray(module) ? [...module] : [module]
  routeModuleList.push(...modList)
})

// Exportar Rota estática padrão
export const constantRoute: RouteRecordRaw[] = [...routeModuleList]

// Crie instância de roteamento
const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL as string),
  routes: routeModuleList,
})

// Montar rota e criar guardas de rota
export function setupRouter(app: App<Element>) {
  app.use(router)
  createGuard(router)
}

// Você também pode usar a instância de roteamento exportada para montar
export default router
