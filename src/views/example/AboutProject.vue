<template>
  <div>
    <h1>{{ msg }}</h1>
    <n-skeleton text :repeat="50" /> <n-skeleton text style="width: 60%" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  msg?: string
}
withDefaults(defineProps<Props>(), {
  msg: 'Esta página deve ser concluída',
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: rgb(236, 162, 162);
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
