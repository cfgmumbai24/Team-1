import mongoose from 'mongoose';

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
        enum: ['English', 'Hindi']
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
        enum: ['admin', 'member', 'moderator']
    },
    profilePic: {
        type: String,
        default: ""
    },
    lastLogin: {
        type: Date,
        default: Date.now // Set default to the current time
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const User = mongoose.model("User", userSchema);

export default User;
