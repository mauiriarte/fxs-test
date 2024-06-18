import React from 'react';
import styles from './DropdownDesktop.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import SecondaryDropdown from '../SecondaryDropdown/SecondaryDropdown';
import { useState } from 'react';

const DropdownDesktop = () => {
  const [showSecondaryDropdown, setShowSecondaryDropdown] = useState(false);

  const handleHideClick = () => {
    setShowSecondaryDropdown(!showSecondaryDropdown);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownbutton} onClick={handleHideClick}>
        <FontAwesomeIcon icon={faEyeSlash} className={styles.icon} />
        <p>Hide</p>
      </div>
      <div className={styles.dropdownbutton}>
        <FontAwesomeIcon icon={faSliders} className={styles.icon} />
        <p>Improve my feed</p>
      </div>
      {showSecondaryDropdown && (
        <SecondaryDropdown
          className={styles.secondaryDropdown}
          closeClick={handleHideClick}
        />
      )}
    </div>
  );
};

export default DropdownDesktop;
