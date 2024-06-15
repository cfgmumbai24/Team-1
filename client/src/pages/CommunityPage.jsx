import React from 'react'
import './community.css'
import ForumCard from '../components/ForumCard'

export default function CommunityPage() {
  return (
    <div className='container'>
      <div className='parent'>
        <ForumCard />
        <ForumCard />
        <ForumCard />
      </div>
    </div>
  )
}
