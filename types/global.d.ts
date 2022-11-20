declare namespace Common {
/**
   * Modo de estratégia
   * [Status, a função de retorno de chamada executada durante o verdadeiro]
   */
  type StrategyAction = [boolean, () => void]

  interface Recordable {
    [k: string | number]: unknown
  }

  interface KeyLabel {
    key: string | number
    label: string | number
  }
}
