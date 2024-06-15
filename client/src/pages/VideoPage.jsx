//import React from 'react';

const VideoPage = () => {
  const videos = [
    { src: 'https://www.youtube.com/embed/IbjMvJnx_GM', title: 'Video 1' },
    { src: 'https://www.youtube.com/embed/6j1Oj5N7kwE', title: 'Video 2' },
    {
      src: 'https://www.youtube.com/watch?v=f2EqECiTBL8&t=22786s', title: 'Video 3'
    },
    {src: 'https://www.youtube.com/watch?v=LMT15LKWE8Q', title: 'Video 4'}
    // Add more videos as needed
  ];


  return (
    <div className="video-row">
      {videos.map((video, index) => (
        <div key={index} className="card " >
          <iframe 
            width="320" 
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