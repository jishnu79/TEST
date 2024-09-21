import express from 'express'
import UserModel from '../Models/UserModel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'

dotenv.config();

export const getAllUser = async (req: express.Request, res: express.Response) => {
    try {
        let users = await UserModel.find()
        return res.send({ data: users, success: true })
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getUserData = async (req: express.Request, res: express.Response) => {
    try {
        const user = await UserModel.findById({ _id: req.body.id })
        if (!user) {
            return res.send({ message: "user net found", success: false })
        } else {
            res.status(200).send({
                success: true,
                data: user
            })
        }
    } catch (error) {
        console.log(error);
        res.status(200).send({ message: "Auth error", success: false })
    }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
    const body = req.body

    try {
        if (body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(body.password, salt)
        }
        const user = await UserModel.findByIdAndUpdate(body.id, req.body, {
            new: true,
        })

        const token = jwt.sign(
            {
                username: user.name, id: user._id
            },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
        )
        res.status(200).send({ data: user, message: "Update success", success: true, token })
    } catch (error) {
        res.status(500).json(error)
    }
}

export const OnUploadImage = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { profileImage, id } = req.body
    console.log(profileImage);

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    })
    const ap = await cloudinary.uploader.upload(
        profileImage, {
        folder: "products",
        // width: 300,
        // crop: "scale"
    }

    ).catch((error) => {
        console.log(error);
    })
    console.log(ap);

    if (ap) {
        req.body.profileImage = ap.secure_url
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
            new: true,
        })
    }
}