

import express from 'express'
import cors from 'cors'
const app = express()
import messageRouter from './routes/message.route.js'
import connectToDB from './config/db.js'
app.use(express.json())
app.use(cors())

connectToDB()

app.use('/api', messageRouter)

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})