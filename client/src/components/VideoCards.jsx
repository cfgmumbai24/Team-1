

import PropTypes from 'prop-types';

const VideoCard = ({ videoSrc, title }) => {
  VideoCard.propTypes = {
    videoSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };
  
  return (
    <div className="card">
      <iframe 
        width="560" 
        height="315" 
        src={videoSrc} 
        title={title}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
      <h2>{title}</h2>
    </div>
  );
};


export default VideoCard;