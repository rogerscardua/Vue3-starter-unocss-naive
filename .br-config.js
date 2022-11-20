module.exports = {
  types: [
    { value: 'feat', name: 'feat:     Novas características' },
    { value: 'fix', name: 'fix:      Corrija o bug' },
    { value: 'docs', name: 'docs:     Mudança de documento' },
    {
      value: 'style',
      name: 'style:   Formato de código (não afeta a função, como correções, como espaços, seminários e outros formatos）',
    },
    {
      value: 'refactor',
      name: 'refactor: Reconstrução de código (excluindo a correção de bugs, novos recursos adicionados）',
    },
    { value: 'perf', name: 'perf:     Otimização de performance ' },
    { value: 'test', name: 'test:     Adicionar e modificar casos de teste' },
    {
      value: 'build',
      name: 'build:    Processo de construção, dependências externas (como atualizar o pacote NPM, modificar a configuração do andaime, etc.）',
    },
    { value: 'ci', name: 'ci:       Modifique a configuração do CI, script ' },
    {
      value: 'chore',
      name: 'chore:    A mudança do processo de construção ou ferramentas e bibliotecas auxiliares (não afeta arquivos de origem, casos de teste）',
    },
    { value: 'revert', name: 'revert:   Role para trás commit' },
  ],
  scopes: [
    ['projects', 'Construção do projeto'],
    ['components', 'Componente -relacionado'],
    ['hooks', 'hook Relacionado'],
    ['utils', 'Utils relacionados'],
    ['types', 'Tipo TS relacionado'],
    ['styles', 'Estilo relacionado'],
    ['deps', 'Dependência do projeto'],
    ['auth', 'Modificar para auth'],
    ['other', 'Outras modificações'],
    ['custom', 'nenhuma das acima?Eu quero personalizar'],
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`,
    }
  }),
  messages: {
    type: 'Certifique -se de que este envio segue a especificação angular!\ n Escolha o tipo que deseja enviar：',
Escopo: '\ n Selecione um escopo (opcional):',
    CustomScope: 'Insira o escopo personalizado:',
    Assunto: 'Preencha A descriprição da Mudança de Refino Curto: \ n',
    Corpo: 'Preencha uma descrição de alteração mais detalhada (opcional).Use "|" "alteração: \ n ',
    Breaking: 'Para enumerar mudanças não compatíveis (opcional): \ n',
    Footeiro: 'Liste os problemas que foram alterados.Por exemplo: #31, #34: \ n ',
    ConfirmComit: 'Confirm o envio?'
  },
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 100,
  breaklineChar: '|',
}
