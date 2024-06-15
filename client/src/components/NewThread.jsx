// src/components/NewThread.js
import React, { useState } from 'react';

function NewThread() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle new thread creation
    console.log('New Thread:', { title, content });
  };

  return (
    <div>
      <h1>Create New Thread</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Create Thread</button>
      </form>
    </div>
  );
}

export default NewThread;
