import mongoose from "mongoose";

interface authAttr {
    name: string,
    email: any
    password: number
    confirmpass: number[]
}

interface authDoc extends mongoose.Document {
    name: string,
    email: any
    password: number
    confirmpass: number[]
}

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    confirmpass: {
        type: String,
        require: true
    },
    profileImage: String,
},
    {
        timestamps: true
    }
)

const UserModel = mongoose.model<authDoc>("Users", UserSchema)
export default UserModel   