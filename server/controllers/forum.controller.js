import ForumPost from "../models/ForumPost.model.js";


export const addPost = async (req, res) => {
    try {
        const { user_id, language, no_of_upvotes, no_of_downvotes, reported_count, content } = req.body;

        const newPost = new ForumPost({
            user_id,
            language,
            no_of_upvotes: no_of_upvotes || 0,
            no_of_downvotes: no_of_downvotes || 0,
            reported_count: reported_count || 0,
            content
        });

        if (newPost) {
            await newPost.save();
            res.status(200).json({
                user_id: newPost.user_id,
                language: newPost.language,
                no_of_upvotes: newPost.no_of_upvotes,
                no_of_downvotes: newPost.no_of_downvotes,
                reported_count: newPost.reported_count,
                content: newPost.content,
                createdAt: newPost.createdAt,
                updatedAt: newPost.updatedAt
            });
        } else {
            console.log("Invalid post data");
            res.status(400).json({ error: "Invalid post data" });
        }
    } catch (error) {
        console.log("Error in post add controller: ", error.message);
        res.status(500).json({ error: `Internal server error ${error.message}` });
    }
};

export const getForumPostsInRange = async (req, res) => {
    const { start, end, language } = req.params;

    const startIndex = parseInt(start, 10);
    const endIndex = parseInt(end, 10);

    if (isNaN(startIndex) || isNaN(endIndex) || startIndex < 0 || endIndex < 0 || startIndex > endIndex) {
        return res.status(400).json({ message: 'Invalid start or end index' });
    }

    try {
        let filter = {};
        if (language) {
            filter = { language }; // Filter exactly by the provided language (case-sensitive)
        }

        const forumPosts = await ForumPost.aggregate([
            { $match: filter },
            { $skip: startIndex },
            { $limit: endIndex - startIndex + 1 }
        ]);

        return res.status(200).json(forumPosts);
    } catch (error) {
        return res.status(500).json({ message: `Error retrieving forum posts: ${error.message}` });
    }
};

