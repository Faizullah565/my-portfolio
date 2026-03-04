import express from 'express'
import { message } from '../controllers/controller.message.js'

const router = express.Router()

router.post("/message", message)

export default router