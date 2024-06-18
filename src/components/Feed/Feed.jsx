import React from 'react';
import styles from './Feed.module.css';
import PostCard from '../PostCard/PostCard';

const Feed = ({ activeTab, posts }) => {
  const filteredPosts =
    activeTab === 'latest'
      ? posts.filter((post) => !post.isPopular).slice(0, 2)
      : posts.filter((post) => post.isPopular).slice(0, 1);
  return (
    <div className={styles.feed}>
      {filteredPosts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};
export default Feed;
