
import Comment from '../models/comment.model.js';


export const createComment = async (req, res) => {
    const {
        user_id,
        post_id,
        language,
        no_of_upvotes,
        no_of_downvotes,
        reported_count,
        content,
        comment_id
    } = req.body;

    try {
        const newComment = new Comment({
            user_id,
            post_id,
            language,
            no_of_upvotes: no_of_upvotes || 0,
            no_of_downvotes: no_of_downvotes || 0,
            reported_count: reported_count || 0,
            content,
            comment_id: comment_id || null
        });

        await newComment.save();

        res.status(201).json(newComment);
    } catch (error) {
        console.error("Error creating comment:", error.message);
        res.status(500).json({ error: 'Failed to create comment' });
    }
};

export const getCommentsByPostId = async (req, res) => {
    const { post_id } = req.params;

    try {
        const comments = await Comment.find({ post_id });

        res.status(200).json(comments);
    } catch (error) {
        console.error("Error retrieving comments:", error.message);
        res.status(500).json({ error: 'Failed to retrieve comments' });
    }
};

export const getCommentsByCommentId = async (req, res) => {
    const { id } = req.params; // Assuming 'id' is the parameter name for comment_id

    try {
        const comments = await Comment.find({ comment_id: id });

        if (comments.length === 0) {
            return res.status(404).json({ error: 'No comments found with the provided id' });
        }

        res.status(200).json(comments);
    } catch (error) {
        console.error("Error retrieving comments by comment_id:", error.message);
        res.status(500).json({ error: 'Failed to retrieve comments by comment_id' });
    }
};


export const incrementUpvotes = async (req, res) => {
    const { comment_id } = req.params;

    try {
        const comment = await Comment.findOneAndUpdate(
            { _id: comment_id },
            { $inc: { no_of_upvotes: 1 } }, 
            { new: true } 
        );

        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        res.status(200).json(comment);
    } catch (error) {
        console.error("Error incrementing upvotes:", error.message);
        res.status(500).json({ error: 'Failed to increment upvotes' });
    }
};

export const decrementDownvotes = async (req, res) => {
    const { comment_id } = req.params;

    try {
        const comment = await Comment.findOneAndUpdate(
            { _id: comment_id },
            { $inc: { no_of_downvotes: 1 } }, // Decrementing the no_of_downvotes field by 1
            { new: true } // To return the updated document
        );

        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        res.status(200).json(comment);
    } catch (error) {
        console.error("Error decrementing downvotes:", error.message);
        res.status(500).json({ error: 'Failed to decrement downvotes' });
    }
};