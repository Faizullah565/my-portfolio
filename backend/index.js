
import dotenv from 'dotenv'

import express from 'express'
import cors from 'cors'
const app = express()
import messageRouter from './routes/message.route.js'
import connectToDB from './config/db.js'
app.use(express.json())
app.use(cors())

connectToDB()
dotenv.config();

app.use('/api', messageRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
})