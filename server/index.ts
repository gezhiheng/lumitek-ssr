import mongoose from 'mongoose'
import config from '~/config'

export default async () => {
  try {
    let url = config.dbUrl
    if (url == null) {
      throw Error('Do not get URL')
    }
    let dbName = config.dbName
    await mongoose.connect(url + dbName)
    console.log('DB connection established')
  } catch (err) {
    console.error('DB connection failed', err)
  }
}
