# Vue 3 Starter

[![Author](https://img.shields.io/badge/Author-Wyatex-green)](https://github.com/Wyatex/)
[![Issues](https://img.shields.io/github/issues/Wyatex/Vue3-starter)](https://github.com/Wyatex/Vue3-starter/issues)
[![License](https://img.shields.io/badge/License-MIT-yellowgreen)](https://github.com/Wyatex/Vue3-starter/blob/master/LICENSE)

> Um conjunto de integração Vite 2.x + Vue 3.x + TypeScript + Vue Router + Pinia + Axios + ESlint Modelos de desenvolvimento rápido para kits iguais。

[visualização online](https://wyatex.gitee.io/vue3-starter/)

## Início rápido

### Projeto de download

Use Git para clonagem

```sh
git clone https://github.com/rogerscardua/Vue3-starter-unocss-naive.git
```
### Dependências de instalação

```sh
yarn
```

### Iniciar o servidor de dev e construir

dev
```sh
yarn dev
```

Construção, a embalagem padrão para'./dist'

```sh
yarn build
```

## pilha de tecnologia

- Linguagem de programação:[Typescript](https://www.typescriptlang.org/zh/) + [Javascript](https://www.javascript.com/)
- Construir ferramentas：[Vite2](https://vitejs.cn/)
- Frente -nd Framework:[Vue3](https://v3.cn.vuejs.org/)
- Gerenciamento de roteamento:[Vue-Router4](https://next.router.vuejs.org/zh/index.html)
- [pinia](https://pinia.esm.dev/)
- CSS Pré-processando：[Less](https://less.bootcss.com/)
- CSS motor：[UnoCSS](https://github.com/unocss/unocss)
- HTTP ferramenta:[Axios](https://axios-http.com/)
- JSX Lide com:[@vitejs/plugin-vue-jsx](https://www.npmjs.com/package/@vitejs/plugin-vue-jsx)
- Especificação de código:[ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- teste de unidade:[vitest](https://vitest.dev/) + [vue-test-utils](https://vue-test-utils.vuejs.org/zh/)
- Biblioteca de componentes:[Naive-UI](https://www.naiveui.com/)
- Icon ：[@iconify/json](https://www.npmjs.com/package/@iconify/json) + [@iconify/vue](https://www.npmjs.com/package/@iconify/vue) + [unplugin-icons](https://github.com/antfu/unplugin-icons)

> icon Pesquisa de ícone：[icones](https://icones.js.org/)

## Configuração do projeto

Os itens de configuração principal atual:
- src/settings/index.ts
- .env(.development / .production)
- vite.config.js

Biblioteca de componentes da UI
Este ramo usa o NAIVEUI, que usará outras bibliotecas de componentes em outras filiais, como ANTDV e ElementUi, então fique atento!