import { nextTick } from 'vue'
import useBoolean from './useBoolean'

/** carga pesada*/
export default function useReload() {
  // logotipo de reparo
  const { bool: reloadFlag, setTrue, setFalse } = useBoolean(true)

  /**
   * Acionar carga pesada
   * @param duration - Tempo de atraso (MS)
   */
  async function handleReload(duration = 0) {
    setFalse()
    await nextTick()
    if (duration) {
      setTimeout(() => {
        setTrue()
      }, duration)
    } else {
      setTrue()
    }
  }

  return {
    reloadFlag,
    handleReload,
  }
}
