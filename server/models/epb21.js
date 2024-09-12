import mongoose from 'mongoose'

// 建立 Schema
const tableSchema = new mongoose.Schema({
  type: {
    type: 'string',
    required: true,
  },
  form: {
    type: 'string',
    required: false,
  },
  data: {
    type: Array,
    required: true,
  }
}, {
  versionKey: false
})

// 建立 Model
const Table = mongoose.model('epb21', tableSchema)

export default Table