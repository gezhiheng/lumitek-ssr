import axios from 'axios'
import swal from 'sweetalert'
import { debounce } from 'lodash-es'

class BaseRequest {
  constructor(contentType = 'application/json;charset=utf-8') {
    let baseURL
    if (process.env.NODE_ENV === 'production') {
      baseURL = 'http://localhost:3000/api/'
    } else {
      baseURL = 'http://10.1.1.179:3000/api/'
    }
    this.axiosInstance = axios.create({
      baseURL: baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': contentType,
      },
    })
  }

  async GET(url) {
    return await this.debouncedRequest('GET', url)
  }

  async POST(url, params) {
    return await this.debouncedRequest('POST', url, params)
  }

  async PUT(url, params) {
    return await this.debouncedRequest('PUT', url, params)
  }

  async DELETE(url, params) {
    return await this.debouncedRequest('DELETE', url, params)
  }

  async debouncedRequest(method, url, params) {
    return new Promise((resolve, reject) => {
      const debouncedFunc = debounce(
        async () => {
          try {
            const result = await this.request(method, url, params)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        },
        500,
        {
          leading: true,
          maxWait: 1000,
        },
      )

      debouncedFunc()
    })
  }

  async request(method, url, params) {
    try {
      const response = await this.axiosInstance.request({
        method,
        url,
        data: params,
      })
      const result = response.data
      return result
    } catch (error) {
      console.error(`❌ ~ ${url} ~ ${method} ~ request ~ error:`, error)
      swal('錯誤', error?.response?.data?.message || error?.message, 'error')
    }
  }
}

export default BaseRequest
