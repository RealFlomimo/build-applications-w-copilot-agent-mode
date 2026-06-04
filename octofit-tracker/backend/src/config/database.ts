import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db'

export const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log(`✅ Connected to MongoDB database: ${MONGODB_URI}`)
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error)
    throw error
  }
}

export default mongoose
