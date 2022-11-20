<template>
  <div></div>
</template>

<script lang="ts" setup>
import { useLoadingBar, useDialog, useMessage, useNotification } from 'naive-ui'

// O método de montagem do componente ingênuo na janela para chamar a função de roteamento do gancho e solicitar
function registerNaiveTools() {
  window.$loading = useLoadingBar()
  window.$dialog = useDialog()
  window.$message = useMessage()
  window.$notification = useNotification()
}

registerNaiveTools()
</script>
<style scoped></style>
