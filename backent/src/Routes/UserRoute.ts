import express from "express"
import  { authMidd } from '../MiddleWare/AuthMiddleware'
import { getAllUser, getUserData, OnUploadImage, updateUser } from "../Collections/UserController"

const router = express.Router()

router.get('/getAllUsers', getAllUser)
router.post('/getUserData',getUserData)
router.put('/updateUser',updateUser)
router.post('/uploadImage',OnUploadImage)

export default router           