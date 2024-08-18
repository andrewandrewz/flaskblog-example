import React from 'react';
import SearchComponent from './SearchComponent';
import PostList from './PostList';
import useSearchPosts from '../hooks/useSearchPosts';

const HomePage = () => {
  const { posts, handleSearch, isLoading, error } = useSearchPosts();

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <SearchComponent onSearch={handleSearch} />
      <PostList posts={posts} isLoading={isLoading} error={error} />
    </div>
  );
};

export default HomePage;
