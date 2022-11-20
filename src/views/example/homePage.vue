<template>
  <n-card
    hoverable
    class="min-h-full home-page rounded-16px"
    content-style="display: flex; flex-direction: column; justify-content:center; align-item: center;"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <n-gradient-text type="success" :size="64">
        Vue3 Starter 2
      </n-gradient-text>
      <n-h1 prefix="bar" type="success">
        <n-gradient-text type="danger">
          Modelo de projeto Vue3 que é usado na caixa
        </n-gradient-text>
      </n-h1>
      <div class="mt-4">
        <n-button size="large" type="primary" class="mr-8" @click="handlerBtn">
          Sobre projetos
        </n-button>
        <n-button size="large" @click="onOpenMyGithub" class="mr-8">
          <template #icon><Icon icon="tabler:3d-cube-sphere" /></template>
          Autor Github
        </n-button>
      </div>
    </div>
  </n-card>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
const handlerBtn = () => {
  window.$loading.error()
  window.$notification.error({
    title: 'Função imprevisível',
    content: 'Aguarde pacientemente a função de implementar',
    duration: 3000,
  })
}
const onOpenMyGithub = () => {
  window.open('https://github.com/rogerscardua')
}
</script>

<style lang="less" scoped></style>
