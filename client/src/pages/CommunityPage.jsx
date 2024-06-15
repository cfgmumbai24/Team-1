import React, { useState } from 'react'
import './community.css'
import ForumCard from '../components/ForumCard'

export default function CommunityPage() {
  const [messText,setMessText] = useState('')
  return (
    <div className='container'>
      {/* <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}> */}
        <div className='parent'>
          <ForumCard />
          <ForumCard />
          <ForumCard />
          <ForumCard />
          <ForumCard />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around',position: 'absolute', zIndex: 120, bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: '60%'}}>
          <input style={{width: '90%', padding: '5px'}} onChange={e => setMessText(e.target.value)} type="text" />
          <button className='btn btn-primary'>Send</button>
        </div>
      {/* </div> */}
    </div>
  )
}
