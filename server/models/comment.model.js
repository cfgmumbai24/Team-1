import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ForumPost',
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
    },
    comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        default: null // Optional field for replies to store parent comment's id
    }
}, {timestamps: true}); // This helps get the date and time for when a comment is created or updated

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
