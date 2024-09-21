import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const secret = process.env.JWT_KEY as string; // Ensure secret is a string

export const authMidd = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const token = req.headers['authorization']?.split(" ")[1];

        if (!token) {
            return res.status(401).send({
                message: "Authorization token is missing",
                success: false
            });
        }

        jwt.verify(token, secret, (err, decode) => {
            if (err) {
                return res.status(401).send({
                    message: "Authentication failed",
                    success: false
                });
            } else {
                if (typeof decode !== 'string' && decode && 'id' in decode) {
                    req.body.userId = (decode as JwtPayload).id; // Ensure decode is JwtPayload before accessing id
                    next();
                } else {
                    return res.status(401).send({
                        message: "Invalid token payload",
                        success: false
                    });
                }
            }
        });
    } catch (error) {
        console.error(error);
        res.status(401).send({
            message: "Authentication failed",
            success: false
        });
    }
};
