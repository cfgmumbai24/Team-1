import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    // no_of_likes: {
    //     type: Number,
    //     default: 0
    // },
    // comments: [{ type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Comment',}], // Array of comments using the commentSchema


 
}, {timestamps: true});

const Video = mongoose.model("Video", videoSchema);

export default Video;