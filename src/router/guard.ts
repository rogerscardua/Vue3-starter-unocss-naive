import { useRouteStoreOutOfSetup } from '@/store/modules/route'
import { storage } from '@/utils/storage'
import { isNavigationFailure } from 'vue-router'
import type { Router } from 'vue-router' 

export function createGuard(router: Router) {
  router.beforeEach(async (_to, _from, next) => {
    const Loading = window['$loading'] || null
    Loading && Loading.start()

   // você pode executar o negócio de inspeção de token. Por exemplo
    const token = storage.get('token')
    if (!token) {
      //   if (to.meta.ignoreAuth) {
      //     next()
      //     return
      //   }
      //   // redirect login page
      //   const redirectData: {
      //     path: string
      //     replace: boolean
      //     query?: Recordable<string>
      //   } = {
      //     path: '/login',
      //     replace: true,
      //   }
      //   if (to.path) {
      //     redirectData.query = {
      //       ...redirectData.query,
      //       redirect: to.path,
      //     }
      //   }
      //   next(redirectData)
      //   return
    }

    next()
    Loading && Loading.finish()
  })

  router.afterEach((to, _, failure) => {
    document.title = (to?.meta?.title as string) || document.title
    if (isNavigationFailure(failure)) {
      console.error('failed navigation', failure)
    }

    const routeStore = useRouteStoreOutOfSetup()
    // Defina o nome do componente que precisa ser armazenado em cache aqui
    const keepAliveComponents = routeStore.keepAliveComponents
    const currentComName: any = to.matched.find(
      item => item.name == to.name
    )?.name
    if (
      currentComName &&
      !keepAliveComponents.includes(currentComName) &&
      to.meta?.keepAlive
    ) {
      // componentes que precisam de cache
      keepAliveComponents.push(currentComName)
    } else if (!to.meta?.keepAlive || to.name == 'Redirect') {
      // sem necessidade de armazenar em cache
      const index = routeStore.keepAliveComponents.findIndex(
        name => name == currentComName
      )
      if (index != -1) {
        keepAliveComponents.splice(index, 1)
      }
    }
    routeStore.setKeepAliveComponents(keepAliveComponents)

    const Loading = window['$loading'] || null
    Loading && Loading.finish()
  })

  router.onError((error: any) => {
    console.error('Erro de roteamento:', error)
  })
}
