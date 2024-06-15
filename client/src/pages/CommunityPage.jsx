import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Comment = ({ comment, onReplyClick, onViewRepliesClick, onAddReply, showReplies, showReplyInput }) => {
  const [replyText, setReplyText] = useState('');

  const handleAddReply = (e) => {
    e.preventDefault();
    onAddReply(comment.id, replyText);
    setReplyText('');
  };

  return (
    <div className="card mb-3 text-center col-10">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <img
            src={comment.profilePic}
            alt={comment.username}
            className="rounded-circle"
            width="50"
            height="50"
          />
          <h5 className="card-title ms-3">{comment.username}</h5>
        </div>
        <p className="card-text body-font">{comment.text}</p>
        <div className='row'>
          <div className='col-2'>
            <button className="btn rounded btn-outline-primary" onClick={() => onReplyClick(comment.id)}>Reply</button>
          </div>
          <div className='col-10'>
            <button className="btn rounded btn-outline-primary" onClick={() => onViewRepliesClick(comment.id)}>
              {showReplies ? 'Hide Replies' : 'View Replies'}
            </button>
          </div>
        </div>
        {showReplies && (
          <div className="mt-3">
            {comment.replies.map((reply, index) => (
              <div key={index} className="d-flex align-items-center mt-2">
                <img
                  src={reply.profilePic}
                  alt={reply.username}
                  className="rounded-circle"
                  width="30"
                  height="30"
                />
                <div className=' row  col-12 align-items-center'>
                  <h6 className="mb-0 col-6 text-center">{reply.username}</h6>
                  <p className="mb-0 col-4 text-center sub-body-font">{reply.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {showReplyInput && (
          <form onSubmit={handleAddReply} className="mt-3">
            <div className="d-flex">
              <input
                type="text"
                className="form-control me-2"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
              />
              <button type="submit" className="btn btn-outline-primary">Add Reply</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default function CommunityPage() {
  const [comments, setComments] = useState([
    { id: 1, username: 'User1', profilePic: 'profile1.jpg', text: 'This is a comment.', replies: [] },
    { id: 2, username: 'User2', profilePic: 'profile2.jpg', text: 'Another comment here.', replies: [] }
  ]);
  const [showComments, setShowComments] = useState(false);
  const [replyInputVisibility, setReplyInputVisibility] = useState(null);
  const [repliesVisibility, setRepliesVisibility] = useState({});

  const handleViewComments = () => {
    setShowComments(!showComments);
  };

  const handleReplyClick = (id) => {
    setReplyInputVisibility(replyInputVisibility === id ? null : id);
  };

  const handleViewRepliesClick = (id) => {
    setRepliesVisibility(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  const handleAddReply = (commentId, replyText) => {
    setComments(prevComments => prevComments.map(comment => {
      if (comment.id === commentId) {
        const newReply = { username: 'CurrentUser', profilePic: 'currentuser.jpg', text: replyText };
        return { ...comment, replies: [...comment.replies, newReply] };
      }
      return comment;
    }));
    setReplyInputVisibility(null);
  };

  return (
    <div className='heading m-4 row'>
      <div className='col-3'></div>
      <div className='col col-6 text-center'>
        <div className='card border border-bold border-rounded p-5'>
          <div className='text-center d-flex'>
            <img
              src="profile.jpg"
              alt="Profile"
              className="rounded-circle"
              width="100"
              height="100"
            />
            <h2 className="mt-3 ms-3">Username</h2>
          </div>
          <span className='sub-heading mb-5'>
            "bjsdcbhbejnzbnxbsjehbzbcmnnjwhebmzhbc  dcbseubkbdjcbiejcbsmdchsbm"
          </span>
          <div className='row col-3 mx-auto'>
            <button className="btn rounded btn-outline-primary" onClick={handleViewComments}>
              {showComments ? 'Hide Comments' : 'View Comments'}
            </button>
          </div>
          {showComments && (
            <div className='m-3 align-items-right'>
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  comment={comment}
                  onReplyClick={handleReplyClick}
                  onViewRepliesClick={handleViewRepliesClick}
                  onAddReply={handleAddReply}
                  showReplies={repliesVisibility[comment.id]}
                  showReplyInput={replyInputVisibility === comment.id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
