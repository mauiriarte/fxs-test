import React from 'react';
import styles from './PostCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const PostCard = ({ post }) => {
  const formatDate = (originalDate) => {
    const date = new Date(originalDate);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const formattedTime = `${hour}:${minute < 10 ? '0' + minute : minute}`;

    return `${month} ${day}, ${formattedTime}`;
  };

  const formattedPublicationTime = formatDate(post.publicationTime);

  return (
    <div className={styles.postcard}>
      <div className={styles.cardheader}>
        <div className={styles.categorisation}>
          <h3>{post.feed}</h3>
          <h2>{post.subFeed}</h2>
        </div>
        <div className={styles.datebox}>
          <FontAwesomeIcon icon={faClock} className={styles.dateicon} />
          <p>{formattedPublicationTime}</p>
        </div>
      </div>
      <div className={styles.cardtitle}>
        <div className={styles.authorinfo}>
          <p>{post.author.name}</p>
          <p>|</p>
          <p>{post.author.companyName}</p>
        </div>
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
