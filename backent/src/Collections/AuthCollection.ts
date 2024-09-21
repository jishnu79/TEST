import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from '../Models/UserModel'

export const registerUser = async (req: express.Request, res: express.Response) => {

    const salt = await bcrypt.genSalt(10);
    if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    if (req.body.confirmpass) {
        req.body.confirmpass = await bcrypt.hash(req.body.confirmpass, salt);
    }
    const newUser = new UserModel(req.body)
    const { email } = req.body
    try {
        const oldUser = await UserModel.findOne({ email })
        if (oldUser) {
            return res.send({success:false, message: "Email is already registerd" })
        }
        const user = await newUser.save()
        console.log(user);
        
        const token = jwt.sign({
            username: user.email, id: user._id
        }, process.env.JWT_KEY, { expiresIn: '1h' })
        res.send({ data: user,success:true, token,message:"Registration success" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}