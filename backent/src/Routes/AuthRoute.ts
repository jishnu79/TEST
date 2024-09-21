import { registerUser } from "../Collections/AuthCollection"
import express from "express"

const router = express.Router()

router.post("/register", registerUser)
// router.post("/login", loginUser)
// router.post('/forgotpass', forgotPas)

export default router    