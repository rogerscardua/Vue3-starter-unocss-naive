// O período de cache padrão é de 7 dias
export const defaultCacheTime = 60 * 60 * 24 * 7

// Se o armazenamento é criptografado, use AES-ECB por padrão
export const storageEncrypt = true

// Chave de criptografia AES-ECB
export const encryptoKey = 'KgAh3Tc7PCL1j794'

// URL da interface API
export const apiBaseUrl = import.meta.env.VITE_API_URL

// Solicitar tempo de tempo limite
export const requestTimeout = 5000

//Tipo de animação de rota
export const animationType = 'zoom-fade'
