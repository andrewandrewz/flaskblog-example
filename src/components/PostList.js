import React from 'react';

const PostList = ({ posts, isLoading, error }) => {
  if (isLoading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;
  if (posts.length === 0) return <div>No posts found.</div>;

  return (
    <ul className="post-list">
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostList;
