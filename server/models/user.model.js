
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        required: true,
        enum: ['English','Hindi']
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other']
    },
    state: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['admin','member','moderator']
    },
    profilePic: {
        type: String,
        default: ""
    }
}, {timestamps: true}) //helps get the date and time for when a user is created

const User = mongoose.model("User", userSchema);

export default User;