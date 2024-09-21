import jwt from 'jsonwebtoken'
import dotenv from 'dotenv' 
import express from 'express'
  
dotenv.config()
const secret = process.env.JWT_KEY
const authMiddleWare = async (req: express.Request, res: express.Response ,next:express.NextFunction) => {
 try {
        const token = req.headers.authorization.split(" ")[1]
        if (token) {
            const decoded = jwt.verify(token, secret)
            req.body._id = decoded?.id;
        }
        next()
    } catch (error) {
        console.log(error);
    }
}

export default authMiddleWare