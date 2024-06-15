//import React from 'react';

const VideoPage = () => {
  const videos = [
    { src: 'https://www.youtube.com/embed/IbjMvJnx_GM', title: 'Video 1' },
    { src: 'https://www.youtube.com/embed/6j1Oj5N7kwE', title: 'Video 2' },
    // Add more videos as needed
  ];

  return (
    <div>
      {videos.map((video, index) => (
        <div key={index} className="card">
          <iframe 
            width="560" 
            height="315" 
            src={video.src} 
            title={video.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
          <h2>{video.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default VideoPage;