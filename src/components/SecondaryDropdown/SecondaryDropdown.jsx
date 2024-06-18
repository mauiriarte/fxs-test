import React from 'react';
import styles from './SecondaryDropdown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SecondaryDropdown = ({ closeClick }) => {
  return (
    <div className={styles.dropdownbox}>
      <div className={styles.header} onClick={closeClick}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>Tell us why:</p>
      </div>
      <div className={styles.options}>
        <div className={styles.option}>
          <input type='radio' />
          <label>I’m not interested in this author</label>
        </div>
        <div className={styles.option}>
          <input type='radio' />
          <label>I’m not interested in this topic</label>
        </div>
        <div className={styles.option}>
          <input type='radio' />
          <label>I’ve seen too many posts on this topic</label>
        </div>
        <div className={styles.option}>
          <input type='radio' />
          <label>The information is incorrect</label>
        </div>
        <div className={styles.option}>
          <input type='radio' />
          <label>I’ve seen this post before</label>
        </div>
        <div className={styles.option}>
          <input type='radio' />
          <label>Other reasons</label>
        </div>
        <button>Hide Content</button>
      </div>
    </div>
  );
};

export default SecondaryDropdown;
