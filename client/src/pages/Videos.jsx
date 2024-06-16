import React from 'react'
import VideoPage from "./VideoPage";
import { useState } from 'react';
import { useLanguage } from '../contexts/languageContext'
import data from '../../data';

export default function Videos() {
  
  const {isEnglish, toggleLanguage} = useLanguage();
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
        <div className='heading row fw-bold'>
        <div className='col-6 mb-5 text-center heading'><span>{data[1]['abtUs'][isEnglish?'en':'hi']}</span></div>
      </div>
      <div className='col-6 text-center'>
        <button type="button" onClick={() => setShowVideo(val => !val)} className="btn sub-heading rounded btn-outline-primary">{showVideo ? data[11]['hideVid'][isEnglish?'en':'hi'] : data[10]['showVid'][isEnglish?'en':'hi']}</button>
      </div>
      {showVideo && <VideoPage />}
    </div>
  )
}
