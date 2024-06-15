import mongoose from 'mongoose';

const forumPostSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    language: {
        type: String,
        required: true
    },
    no_of_upvotes: {
        type: Number,
        default: 0
    },
    no_of_downvotes: {
        type: Number,
        default: 0
    },
    reported_count: {
        type: Number,
        default: 0
    },
    content: {
        type: String,
        required: true
    }
}, {timestamps: true}); // This helps get the date and time for when a post is created or updated

const ForumPost = mongoose.model("ForumPost", forumPostSchema);

export default ForumPost;
