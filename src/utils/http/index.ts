import Axios from 'axios'
import { apiBaseUrl, requestTimeout } from '@/settings/index'
// import { storage } from '@/utils/storage'

const instance = Axios.create({
  baseURL: apiBaseUrl as string,
  timeout: requestTimeout,
})

instance.interceptors.request.use(
  config => {
    // Preencha de acordo com as necessidades comerciais, como:

    //   // token
    //   if (storage.get('token')) {
    //     // jwt token
    //     config.headers.Authorization = 'Bearer ' + storage.get('token')
    //   }
    return config
  },
  err => {
    // Tratamento de erro
    console.error(err)
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  response => {
    // Preencher de acordo com as necessidades de negócios，Por exemplo, apenas retorne à resposta body，Não retornar \status code Informação igual
    return response.data
  },
  err => {
    // Tratamento de erro
    console.error(err)
    return Promise.reject(err)
  }
)

export { instance as axios }
