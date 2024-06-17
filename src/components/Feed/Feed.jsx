import React from 'react';
import styles from './Feed.module.css';
import PostCard from '../PostCard/PostCard';
import PostCardTester from '../PostCardTester/PostCardTester';

const Feed = ({ activeTab, posts }) => {
  const filteredPosts =
    activeTab === 'latest'
      ? posts.filter((post) => !post.isPopular)
      : posts.filter((post) => post.isPopular);
  return (
    <div className={styles.feed}>
      <PostCardTester />
      {filteredPosts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};
export default Feed;
