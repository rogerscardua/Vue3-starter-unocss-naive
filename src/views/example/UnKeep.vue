<template>
  <n-card>
    <n-h2>Esta página não está em cache, a página de comutação causará perda de estado</n-h2>
    <n-h1>O valor atual：{{ count }}</n-h1>
    <n-button @click="count++">+1</n-button>
  </n-card>
</template>
<script lang="ts" setup>
let count = ref(0)
</script>
