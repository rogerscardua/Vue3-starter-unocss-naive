import { defineStore } from 'pinia'
import { store } from '@/store'
import { animationType } from '@/settings'

export const useSettingStore = defineStore({
  id: 'setting',
  state: () => ({
    darkTheme: false,
    animationType,
  }),
  getters: {
    getDarkTheme(): boolean {
      return this.darkTheme
    },
  },
  actions: {},
})

// Use configuração externa
export function useSettingStoreOutOfSetup() {
  return useSettingStore(store)
}
