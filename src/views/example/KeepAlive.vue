<template>
  <n-card>
    <n-h2>Esta página foi armazenada em cache e a página de comutação não causará perda de estado</n-h2>
    <n-h1>O valor atual:{{ count }}</n-h1>
    <n-button @click="count++">+1</n-button>
  </n-card>
</template>
<script lang="ts" setup>
let count = ref(0)
</script>
