import React, { useState } from 'react'
import formatDateTime from '../../utils/formatDateTime';
import { BiUpvote, BiSolidUpvote, BiDownvote, BiSolidDownvote } from "react-icons/bi";
import useGetComments from '../hooks/comments/useGetComments';
import { useLanguage } from '../contexts/languageContext';

export const Reply = ({ reply }) => {
  return (
    <div style={{paddingTop: '7px',paddingBottom: '2px', borderBottom: '1px #ccc dashed'}} className="reply">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'left', marginLeft: '10', verticalAlign: 'middle'}}>
          <img src="https://via.placeholder.com/35" style={{borderRadius: 999, height: '20px'}} alt="Sample Image" />
          <h5 className="card-title" style={{fontSize: 15, textDecoration: 'underline', margin: 0}}>{'jjj'}</h5>
          <p style={{paddingLeft: '7.5px', margin: 0}}>{reply}</p>
      </div>
    </div>
  );
};

export default function ForumCard({item}) {
  const [showReplies, setShowReplies] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownVoted] = useState(false);

  const {isEnglish, toggleLanguage} = useLanguage();
  console.log("is eng: ",isEnglish)
  const english = localStorage.getItem(isEnglish)

  // const { comments, isGettingComments} = useGetComments(item._id);



  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div className="card forum" style={{width: '100%', height: '80%'}}>
  <div className="card-body">
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', verticalAlign: 'middle', flexWrap: 'wrap'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'left', marginLeft: '10', verticalAlign: 'middle'}}>
          <img src={item?.userDetails?.profilePic} style={{borderRadius: 999}} alt="Sample Image" height={30} width={30} />
          <h5 className="card-title" style={{margin: 0, paddingRight: '5px' }} >{item?.userDetails?.name}</h5>
      </div>
      <h6 className="card-subtitle mb-2 text-body-secondary" style={{margin:0}}>{formatDateTime(item?.createdAt)}</h6>
    </div>
    <p className="card-text">{item?.content}</p>
    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
    <div style={{display: 'flex', justifyContent: 'space-between', margin: 0}}>
    <a href="#" onClick={toggleReplies}>
        {showReplies ? 'Hide Comments' : 'Show  Comments'}
      </a>
      <div style={{cursor: 'pointer'}}>
      {!upvoted ? (
        <>
          {item?.no_of_upvotes}<BiUpvote onClick={() => setUpvoted(true)} size={24} />
        </>
      ) : (
        <>
          {item?.no_of_upvotes + 1}<BiSolidUpvote onClick={() => setUpvoted(false)} size={24} />
        </>
      )}
      {!downvoted ? (
        <>
          <BiDownvote onClick={() => setDownVoted(true)} size={24} />{item?.no_of_downvotes}
        </>
      ) : (
        <>
          {item?.no_of_downvotes + 1}<BiSolidDownvote size={24} onClick={() => setDownVoted(false)} />
        </>
      )}
      </div>
      </div>
      {showReplies && (
        <div className="replies">
          {/* {replies.map((reply, index) => ( */}
            <Reply reply={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the "} />
            <Reply reply={"ok2"} />
            <Reply reply={"ok3"} />
          {/* ))} */}
        </div>
      )}
  </div>
</div>
  )
}
