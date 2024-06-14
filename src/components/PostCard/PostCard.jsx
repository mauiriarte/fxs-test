import React from 'react';
import styles from './PostCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const PostCard = ({ post }) => {
  return (
    <div className={styles.postcard}>
      <div className={styles.cardheader}>
        <div className={styles.categorisation}>
          <h3>{post.feed}</h3>
          <h2>{post.subFeed}</h2>
        </div>
        <div className={styles.datebox}>
          <FontAwesomeIcon icon={faClock} className={styles.dateicon} />
          <p>{post.publicationTime}</p>
        </div>
      </div>
      <div className={styles.cardtitle}>
        <p className={styles.authorinfo}>
          {post.author.name} | {post.author.companyName}
        </p>
        <div className={styles.titlebox}>
          <img src={post.author.imageUrl} className={styles.authorimg} />
          <h1>{post.title}</h1>
        </div>
      </div>
      <div className={styles.cardcontent}>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default PostCard;
