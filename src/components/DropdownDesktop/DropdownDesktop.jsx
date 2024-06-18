import React from 'react';
import styles from './DropdownDesktop.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const DropdownDesktop = () => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownbutton}>
        <FontAwesomeIcon icon={faEyeSlash} className={styles.icon} />
        <p>Hide</p>
      </div>
      <div className={styles.dropdownbutton}>
        <FontAwesomeIcon icon={faSliders} className={styles.icon} />
        <p>Improve my feed</p>
      </div>
    </div>
  );
};

export default DropdownDesktop;
