import React from 'react';
import { useState, useContext } from 'react';
import styles from './PostCardTester.module.css';
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
} from '@fortawesome/free-solid-svg-icons';
import { DropdownContext } from '../../contexts/DropdownContext';

const PostCardTester = ({ post }) => {
  const { toggleDropdown } = useContext(DropdownContext);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleSave = () => {
    setSaved(!saved);
  };

  const handleDropdownOpen = () => {
    toggleDropdown();
  };

  return (
    <div className={styles.postcard}>
      <div className={styles.cardheader}>
        <div className={styles.categorisation}>
          <div className={styles.feed}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <h3>Anlysis</h3>
          </div>
          <h2>Webinars</h2>
        </div>
        <div className={styles.datebox}>
          <FontAwesomeIcon icon={faClock} className={styles.dateicon} />
          <p>May 23, 10:44</p>
        </div>
      </div>
      <div className={styles.cardtitle}>
        <div className={styles.authorinfo}>
          <p>FXStreet Team</p>
          <p>|</p>
          <p>FXStreer</p>
        </div>
        <div className={styles.titlebox}>
          <img
            src='https://media.licdn.com/dms/image/D4E0BAQE4tdEnWvnb2g/company-logo_200_200/0/1700053562276/fxstreet_logo?e=2147483647&v=beta&t=2octcQGVbqE6KFDf5ICRO7cLF1RPQd6ViT3eJ8sNXNM'
            className={styles.authorimg}
            alt='Portrait of the author'
          />
          <h1>
            Premium Webinar: "Elliott Wave Theory Live Trading" by Juan
            Maldonado
          </h1>
        </div>
      </div>
      <div className={styles.cardcontent}>
        <p>
          Juan will find high probability trades based on the Elliott Wave
          Theory on different markets. Get ready to jump into the next wave and
          find the right way to use the theory in live markets. Starting at
          13:00 GMT!
        </p>
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
            {saved ? 'Daved!' : 'Save'}
          </p>
        </div>
        <FontAwesomeIcon
          icon={faEllipsis}
          className={styles.menubutton}
          onClick={handleDropdownOpen}
        />
      </div>
    </div>
  );
};

export default PostCardTester;
