import { defaultCacheTime } from '@/settings'

const DEFAULT_CACHE_TIME = defaultCacheTime

/**
 * Crie um objeto de cache local
 * @param {string=} prefixKey -
 * @param {Object} [storage=localStorage] - sessionStorage | localStorage
 */
export const createStorage = ({
  prefixKey = '',
  storage = localStorage,
} = {}) => {
  /**
   * Cache local
   * @class Storage
   */
  const Storage = class {
    private storage = storage
    private prefixKey?: string = prefixKey

    private getKey(key: string) {
      return `${this.prefixKey}${key}`.toUpperCase()
    }

    /**
     * @description Defina o cache
     * @param {string} key Chave de cache
     * @param {*} value Valor do cache
     * @param expire
     */
    set(
      key: string,
      value: unknown,
      expire: number | null = DEFAULT_CACHE_TIME
    ) {
      const stringData = JSON.stringify({
        value,
        expire: expire !== null ? new Date().getTime() + expire * 1000 : null,
      })
      this.storage.setItem(this.getKey(key), stringData)
    }

    /**
     * Leia o cache
     * @param {string} key Chave de cache
     * @param {*=} def Padrões
     */
    get(key: string, def: unknown = null) {
      const item = this.storage.getItem(this.getKey(key))
      if (item) {
        try {
          const data = JSON.parse(item)
          const { value, expire } = data
          // Retornar diretamente dentro do período de validade
          if (expire === null || expire >= Date.now()) {
            return value
          }
          this.remove(this.getKey(key))
        } catch (e) {
          return def
        }
      }
      return def
    }

    /**
     * Exclua um certo item do cache
     * @param {string} key
     */
    remove(key: string) {
      this.storage.removeItem(this.getKey(key))
    }

    /**
     * Limpe todo o cache
     * @memberOf Cache
     */
    clear(): void {
      this.storage.clear()
    }

    /**
     * configurar cookie
     * @param {string} name cookie nome
     * @param {*} value cookie valor
     * @param {number=} expire Expiração
     * Se o tempo de validade for definido, o navegador será fechado automaticamente por padrão
     * @example
     */
    setCookie(
      name: string,
      value: unknown,
      expire: number | null = DEFAULT_CACHE_TIME
    ) {
      document.cookie = `${this.getKey(name)}=${value}; Max-Age=${expire}`
    }

    /**
     * Obtenha -o de acordo com o nome cookie valor
     * @param name
     */
    getCookie(name: string): string {
      const cookieArr = document.cookie.split('; ')
      for (let i = 0, length = cookieArr.length; i < length; i++) {
        const kv = cookieArr[i].split('=')
        if (kv[0] === this.getKey(name)) {
          return kv[1]
        }
      }
      return ''
    }

    /**
     * Exclua especificado de acordo com o nome cookie
     * @param {string} key
     */
    removeCookie(key: string) {
      this.setCookie(key, 1, -1)
    }

    /**
     * Vazio cookie，Faça tudo cookie Falhou
     */
    clearCookie(): void {
      const keys = document.cookie.match(/[^ =;]+(?==)/g)
      if (keys) {
        for (let i = keys.length; i--; ) {
          document.cookie = keys[i] + '=0;expire=' + new Date(0).toUTCString()
        }
      }
    }
  }
  return new Storage()
}

export const storage = createStorage()

export default Storage
