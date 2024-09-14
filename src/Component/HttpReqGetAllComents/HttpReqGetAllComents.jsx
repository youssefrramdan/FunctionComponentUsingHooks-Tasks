import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HttpReqGetAllComents.css'; 

function HttpReqGetAllComents() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, []); 

  return (
    <div className="comments-container">
      {comments.map((comment) => (
        <div key={comment.id} className="comment-card">
          <h3>{comment.name}</h3>
          <p><strong>Email:</strong> {comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default HttpReqGetAllComents;
