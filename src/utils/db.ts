/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL as string)
    console.log(`Conneted To Mongodb Databse ${conn.connection.host}`)
  } catch (error) {
    console.log(`Errro in Mongodb error`)
  }
}

export default connectDB
