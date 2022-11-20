import { nextTick } from 'vue'
import { defineStore } from 'pinia'
import { store } from '@/store'
import { constantRoute } from '@/router'

export interface IRouteState {
  keepAliveComponents: string[]
  routes: any[]
  reloadFlag: boolean
}

export const useRouteStore = defineStore({
  id: 'route',
  state: (): IRouteState => ({
    keepAliveComponents: [],
    routes: constantRoute,
    reloadFlag: true,
  }),
  actions: {
    setKeepAliveComponents(compNames: string[]) {
      // Defina o componente que precisa ser armazenado em cache
      this.keepAliveComponents = compNames
    },
    /**
     * Página de sobrecarga
     * @param duration - Dedução de carga pesada(ms)
     */
    async reloadPage(duration = 0) {
      this.reloadFlag = false
      await nextTick()
      if (duration) {
        setTimeout(() => {
          this.reloadFlag = true
        }, duration)
      } else {
        this.reloadFlag = true
      }
      setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 })
      }, 100)
    },
  },
})

export function useRouteStoreOutOfSetup() {
  return useRouteStore(store)
}
