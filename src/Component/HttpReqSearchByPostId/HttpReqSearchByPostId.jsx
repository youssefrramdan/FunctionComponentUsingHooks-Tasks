import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './HttpReqSearchByPostId.css';

function HttpReqSearchByPostId() {
  const [postId, setPostId] = useState(1);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (postId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((response) => {
          setComments(response.data);
          setError('');
        })
        .catch(() => {
          setComments([]);
          setError('Error fetching comments');
        });
    }
  }, [postId]);

  return (
    <div className="container">
      <div className="input-container">
        <label htmlFor="postId">Enter Post ID:</label>
        <input
          type="number"
          id="postId"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          min="1"
          placeholder="Enter Post ID"
        />
      </div>
      <div className="comment-list">
        {error && <p className="error-message">{error}</p>}
        {comments.length === 0 && !error && <p className="no-comments">No comments found.</p>}
        {comments.map((comment) => (
          <div key={comment.id} className="comment-card">
            <h3>{comment.name}</h3>
            <p><strong>Email:</strong> {comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HttpReqSearchByPostId;
