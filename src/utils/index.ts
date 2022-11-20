import { h } from 'vue'
import { Icon } from '@iconify/vue'

/**
 * Iconificação dinâmica de renderização
 * @param icon - Nome do ícone
 * @param color - Cor do ícone
 * @param size - Tamanho do ícone
 */
export function iconifyRender(icon: string, color?: string, size?: number) {
  const style: { color?: string; size?: string } = {}
  if (color) {
    style.color = color
  }
  if (size) {
    style.size = `${size}px`
  }
  return () => h(Icon, { icon, style })
}
