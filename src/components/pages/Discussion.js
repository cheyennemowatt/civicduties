import React, { useState } from 'react';
import './css/Discussion.css';

function Discussion() {
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('Elections');
  const [displayCategory, setDisplayCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim() === '') return;

    const newPost = {
      content: postContent,
      category,
      timestamp: new Date().toLocaleString(),
    };

    setPosts([...posts, newPost]);
    setPostContent('');
  };

  const filteredPosts = posts.filter(
    (post) =>
      (searchTerm === '' || post.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (displayCategory === 'All' || post.category === displayCategory)
  );

  return (
    <div className="container">
        <div className='card mt-4 '>
            <div className='card-body'>
    <div className="discussion-forum">
      <h1>Community Discussion Forum</h1>

      {/* Search Section */}
      <div className="forum-section">
        <h2>Search for Posts</h2>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Category Filter Section */}
      <div className="forum-section">
        <h2>Filter by Category</h2>
        <select
          value={displayCategory}
          onChange={(e) => setDisplayCategory(e.target.value)}
          className="category-select"
        >
          <option value="All">All</option>
          <option value="Elections">Elections</option>
          <option value="Events">Events</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Post Form Section */}
      <div className="forum-section">
        <h2>Post Your Thoughts</h2>
        <form onSubmit={handlePostSubmit} className="post-form">
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Share your thoughts..."
            rows="4"
            required
          />
          <div className="post-category-select">
            <label htmlFor="post-category">Choose Category:</label>
            <select
              id="post-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Elections">Elections</option>
              <option value="Events">Events</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button type="submit">Post</button>
        </form>
      </div>

      {/* Display Filtered Posts */}
      <div className="posts-section">
        <h2>Discussion Posts</h2>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div key={index} className="post">
              <p><strong>Category:</strong> {post.category}</p>
              <p>{post.content}</p>
              <span className="timestamp">{post.timestamp}</span>
            </div>
          ))
        ) : (
          <p className="no-posts">No posts found. Be the first to share your thoughts!</p>
        )}
      </div>
    </div>
</div>
</div>
</div>
   
  );
}

export default Discussion;