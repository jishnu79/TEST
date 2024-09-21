import { login, registerUser } from "../Collections/AuthCollection"
import express from "express"

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", login)
// router.post('getUserData')

export default router    