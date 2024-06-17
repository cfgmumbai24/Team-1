import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HiOutlineTrash } from 'react-icons/hi';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const VideoItem = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const VideoTitle = styled.h2`
  margin-top: 0;
`;

const VideoDescription = styled.p`
  margin-bottom: 20px;
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  color: #ff4d4f;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: #ff0000;
  }
`;

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/video/getAll');
      setVideos(response.data);
    } catch (error) {
      console.error('Failed to fetch videos:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/video/delete/${id}`);
      fetchVideos(); // Refresh the list after deletion
    } catch (error) {
      console.error('Failed to delete video:', error);
    }
  };

  return (
    <VideoContainer>
      {videos.map((video) => (
        <VideoItem key={video._id}>
          <iframe 
            width="100%" 
            height="200px" 
            src={video.url} 
            title={video.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
          <VideoTitle>{video.title}</VideoTitle>
          <VideoDescription>{video.description}</VideoDescription>
          <DeleteButton onClick={() => handleDelete(video._id)}>
            <HiOutlineTrash />
            Delete
          </DeleteButton>
        </VideoItem>
      ))}
    </VideoContainer>
  );
};

export default VideoList;
