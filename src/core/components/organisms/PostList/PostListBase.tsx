import { useEffect } from 'react';
import { fetchPosts } from '@app-dtw/core/store/actions';

export const PostListBase = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
