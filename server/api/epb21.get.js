import Table from '../models/epb21'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const condition = {}
  if (query.type) {
    condition.type = { $regex: `.*${query.type}.*`, $options: 'i' } // 模糊查询
  }
  
  if (query.form) {
    condition.form = { $regex: `.*${query.form}.*`, $options: 'i' } // 模糊查询
  }
  try {
    const data = await Table.find(condition)
    return data
  } catch(e) {
    console.error(e)
  }
})