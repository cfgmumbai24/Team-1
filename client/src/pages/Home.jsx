import React from 'react';
import VideoPage from "./VideoPage";
import { useState } from 'react';
import SearchBar from '../components/ChatBot';

const Home = function Home() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className='heading col-6 fw-bold mb-5 text-center '>
        <span>Let&apos;s start Learning</span>
      </div>
      <div className='heading row fw-bold'>
        <div className='col-6 mb-5 text-center heading'><span>Videos</span></div>
      </div>
      <div className='col-6 text-center'>
        <button type="button" onClick={() => setShowVideo(val => !val)} className="btn sub-heading rounded btn-outline-primary">{showVideo ? "Hide Videos" : "Show Videos"}</button>
      </div>
      <div>
        <SearchBar></SearchBar>
      </div>
      {showVideo && <VideoPage />}
    </div>
  )
}

export default Home;