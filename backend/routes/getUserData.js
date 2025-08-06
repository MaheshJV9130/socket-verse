import express from 'express'
import verifyJWT from '../middleware/verifyJWT.js'

const router = express.Router()


 router.get('/get',verifyJWT)

 export default router