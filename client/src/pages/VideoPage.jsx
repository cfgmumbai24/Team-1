import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/video/getAll');
        setVideos(response.data);
      } catch (error) {
        console.error('Failed to fetch videos:', error);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    console.log(videos); // Log the videos state whenever it changes
  }, [videos]);

  return (
    <div className="video-row">
      {Array.isArray(videos) && videos.map((video, index) => (
        <div key={index} className="card">
          <iframe 
            width="320" 
            height="315" 
            src={video.url} 
            title={video.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
          <h2>{video.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default VideoPage;
