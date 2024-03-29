import mongoose from 'mongoose'

const collection = 'Users'

const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

const usersService = mongoose.model(collection, usersSchema)
export default usersService