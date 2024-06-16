import React from 'react'
import VideoPage from "./VideoPage";
import { useState } from 'react';

export default function Videos() {

  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
        <div className='heading row fw-bold'>
        <div className='col-6 mb-5 text-center heading'><span>Videos</span></div>
      </div>
      <div className='col-6 text-center'>
        <button type="button" onClick={() => setShowVideo(val => !val)} className="btn sub-heading rounded btn-outline-primary">{showVideo ? "Hide Videos" : "Show Videos"}</button>
      </div>
      {showVideo && <VideoPage />}
    </div>
  )
}
