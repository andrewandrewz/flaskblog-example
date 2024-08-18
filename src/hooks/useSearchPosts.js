import { useState, useEffect, useCallback } from 'react';

const useSearchPosts = (initialPosts = []) => {
  const [posts, setPosts] = useState(initialPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = useCallback(async (query = '') => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(query ? `/api/search?query=${query}` : '/api/posts');
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching posts:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    fetchPosts(query);
  }, [fetchPosts]);

  return { posts, handleSearch, isLoading, error };
};

export default useSearchPosts;
