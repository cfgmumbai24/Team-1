import React, { useState } from 'react'
import { BiUpvote, BiSolidUpvote, BiDownvote, BiSolidDownvote } from "react-icons/bi";

export const Reply = ({ reply }) => {
  return (
    <div style={{paddingTop: '7px',paddingBottom: '2px', borderBottom: '1px #ccc dashed'}} className="reply">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'left', marginLeft: '10', verticalAlign: 'middle'}}>
          <img src="https://via.placeholder.com/35" style={{borderRadius: 999, height: '20px'}} alt="Sample Image" />
          <h5 className="card-title" style={{fontSize: 15, textDecoration: 'underline', margin: 0}}>Username</h5>
          <p style={{paddingLeft: '7.5px', margin: 0}}>{reply}</p>
      </div>
    </div>
  );
};

export default function ForumCard() {
  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div className="card forum" style={{width: '100%', height: '80%'}}>
  <div className="card-body">
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', verticalAlign: 'middle', flexWrap: 'wrap'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'left', marginLeft: '10', verticalAlign: 'middle'}}>
          <img src="https://via.placeholder.com/35" style={{borderRadius: 999}} alt="Sample Image" />
          <h5 className="card-title" style={{margin: 0, paddingRight: '5px' }} >Username</h5>
      </div>
      <h6 className="card-subtitle mb-2 text-body-secondary" style={{margin:0}}>timestamp</h6>
    </div>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div style={{display: 'flex', justifyContent: 'space-between', margin: 0}}>
    <a href="#" onClick={toggleReplies}>
        {showReplies ? 'Hide Replies' : 'Show Replies'}
      </a>
      <div style={{cursor: 'pointer'}}>
      <BiUpvote />
      <BiDownvote />
      <BiSolidUpvote />
      <BiSolidDownvote />
        {/* <img style={{height: '25px'}} src="upvote.svg" alt="" />
        <img style={{height: '25px'}} src="downvote.svg" alt="" /> */}
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
