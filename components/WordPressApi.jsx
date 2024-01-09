// ClientComponent.client.jsx
'use client';



import React, { useState, useEffect } from 'react';




export default function ClientComponent2() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the JSONPlaceholder API
    fetch('https://learnchurn.com/wp-json/wp/v2/posts?categories=17')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching dataxx:', error));
  }, []);

  return (
    <div>
      <h1 className="animate__animated  animate__zoomInDown">Post List</h1>
      <ul>
        {posts.map(post => (
          <li className="animate__animated  animate__zoomInDown" key={post.id}>{post.date}</li>
        ))}
      </ul>
    </div>
  );
}
