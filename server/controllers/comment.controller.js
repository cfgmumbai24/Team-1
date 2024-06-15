
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




