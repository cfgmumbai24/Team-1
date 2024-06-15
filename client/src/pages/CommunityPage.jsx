import React, { useEffect } from 'react'
import './community.css'
import ForumCard from '../components/ForumCard'
import { useLanguage } from '../contexts/languageContext'
import useGetForumPosts from '../hooks/forum/useGetForumPosts';

export default function CommunityPage() {
   const {isEnglish, toggleLanguage} = useLanguage();
   console.log("is eng: ",isEnglish)
   const english = localStorage.getItem(isEnglish)

   const { posts, isGettingPosts} = useGetForumPosts(isEnglish);

   console.log("posts: ", posts)

   useEffect(() => {

   }, []) 
  return (
    <div className='container'>
      <div className='parent'>
        {posts?.map((item, index) => {
          return <ForumCard key={index} />
        })}
      </div>
    </div>
  )
}
