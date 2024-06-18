import React from 'react';
import { useState, useContext } from 'react';
import styles from './PostCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faHeart,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import {
  faEllipsis,
  faMagnifyingGlass,
  faHeart as solidHeart,
  faBookmark as solidBookmark,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons';
import { DropdownContext } from '../../contexts/DropdownContext';
import DropdownDesktop from '../DropdownDesktop/DropdownDesktop';

const PostCard = ({ post }) => {
  const { toggleDropdown } = useContext(DropdownContext);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleSave = () => {
    setSaved(!saved);
  };

  const handleMenuButtonClick = () => {
    if (window.innerWidth > 600) {
      setDropdownVisible(!dropdownVisible);
    } else {
      toggleDropdown();
    }
  };

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
          <div className={styles.feed}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles.feedicon}
            />
            <h3>{post.feed}</h3>
          </div>
          <FontAwesomeIcon
            icon={faCaretRight}
            className={`${styles.desktop} ${styles.subfeed}`}
          />
          <h2>{post.subFeed}</h2>
        </div>
        <div className={styles.datebox}>
          <FontAwesomeIcon icon={faClock} className={styles.dateicon} />
          <p>{formattedPublicationTime}</p>
        </div>
      </div>
      <div className={styles.cardtitlemobile}>
        <div className={styles.authorinfo}>
          <p>{post.author.name}</p>
          <p>|</p>
          <p>{post.author.companyName}</p>
        </div>
        <div className={styles.titlebox}>
          <img
            src={post.author.imageUrl}
            className={styles.authorimg}
            alt='Portrait of the author'
          />
          <h1>{post.title}</h1>
        </div>
      </div>
      <div className={styles.cardtitledesktop}>
        <img
          src={post.author.imageUrl}
          className={styles.authorimg}
          alt='Portrait of the author'
        />
        <div className={styles.titlebox}>
          <div className={styles.authorinfo}>
            <p>{post.author.name}</p>
            <p>|</p>
            <p>{post.author.companyName}</p>
          </div>
          <h1>{post.title}</h1>
        </div>
      </div>
      <div className={styles.cardcontent}>
        <p>{post.content}</p>
      </div>
      <div className={styles.postbuttons}>
        <div className={styles.likebutton} onClick={toggleLike}>
          <FontAwesomeIcon
            icon={liked ? solidHeart : faHeart}
            className={`${styles.likeicon} ${liked ? styles.solid : ''}`}
          />
          <p className={`${liked ? styles.red : ''}`}>
            {liked ? 'Liked!' : 'Like'}
          </p>
        </div>
        <div className={styles.savebutton} onClick={toggleSave}>
          <FontAwesomeIcon
            icon={saved ? solidBookmark : faBookmark}
            className={`${styles.saveicon} ${saved ? styles.solid : ''}`}
          />
          <p className={`${saved ? styles.green : ''}`}>
            {saved ? 'Saved!' : 'Save'}
          </p>
        </div>
        <div className={styles.tooltipcontainer}>
          <FontAwesomeIcon
            icon={faEllipsis}
            className={styles.menubutton}
            onClick={handleMenuButtonClick}
          />
          {dropdownVisible && (
            <DropdownDesktop className={styles.dropdownDesktop} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
