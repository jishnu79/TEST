import { authControler, login, registerUser } from "../Collections/AuthCollection"
import express from "express"
import  { authMidd } from '../MiddleWare/AuthMiddleware'

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", login)
router.post('/getUserData', authMidd, authControler)

export default router    