import Video from "../models/video.model.js";
export const addVideo = async (req, res) => {
    const { title, description, url } = req.body;

    if (!title || !description || !url) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newVideo = new Video({
            title,
            description,
            url,
            // no_of_likes: 0, // Optionally set default values
            // comments: [] // Optionally set default values
        });

        await newVideo.save();
        res.status(201).json(newVideo);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add video', error });
    }
};

// Function to get all videos
export const getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find();
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch videos', error });
    }
};

// Function to delete a video
export const deleteVideo = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedVideo = await Video.findByIdAndDelete(id);

        if (!deletedVideo) {
            return res.status(404).json({ message: 'Video not found' });
        }

        res.status(200).json({ message: 'Video deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete video', error });
    }
};