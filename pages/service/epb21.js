import BaseRequest from './base_request'
import { objectToQueryString } from '~/utils'

export default class EPB21Request extends BaseRequest {
  async get(condition) {
    const res = await this.GET(`epb21${objectToQueryString(condition)}`)
    console.log('🚀 ~ EPB21Request ~ get ~ res:', res)
    return res
  }
}
