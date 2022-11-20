import type { RouteRecord } from "vue-router"

/**
 * Julgamento Rooting Rooting Router
 * */
export function isRootRouter(item: RouteRecord) {
  return item.meta?.isRoot === true && item.children?.length === 1
}

/**
 * Exclua o roteador
 * */
export function filterRouter(routerMap: Array<any>) {
  return routerMap.filter(item => {
    return (
      (item.meta?.hidden || false) != true &&
      !['/:path(.*)*', '/', '/redirect'].includes(item.path)
    )
  })
}

/**
 * Formato de montagem recursiva Formato
 */
export function generatorMenu(routerMap: Array<any>) {
  return filterRouter(routerMap).map(item => {
    const isRoot = isRootRouter(item)
    const info = isRoot ? item.children[0] : item
    const currentMenu = {
      ...info,
      ...info.meta,
      label: info.meta?.title,
      key: info.name,
      icon: isRoot ? item.meta?.icon : info.meta?.icon,
    }
    // Se existe um submenu e processamento recursivo
    if (!isRoot && info.children && info.children.length > 0) {
      // Recursion
      currentMenu.children = generatorMenu(info.children)
    }
    return currentMenu
  })
}
