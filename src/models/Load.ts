import mongoose, { Schema, Document } from 'mongoose'

interface ILoad extends Document {
  title: string
  description: string
  weight: number
  origin: string
  destination: string
}

const LoadSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  weight: { type: Number, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
})

const Load = mongoose.model<ILoad>('Load', LoadSchema)
export default Load
