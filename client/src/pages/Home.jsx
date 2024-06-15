// import React from 'react'
import VideoPage from "./VideoPage";
const Home = function Home() {
  return (
    <div>
        <div className='heading col-6 fw-bold mb-5 text-center'>
            <span >Let&apos;s start Learning</span>
        </div>
        <div className='heading row  fw-bold'>
            <div className='col-6 text-center heading'><span>Recommended Videos</span></div>
        </div>
        <div className='col-5 text-center'>
        <button type="button" onClick={VideoPage} className="btn rounded btn-outline-primary">View all videos</button>
        </div>
       
    </div>
  )
}

export default Home;
