import React from 'react';
import { useContext } from 'react';
import styles from './Dropdown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { DropdownContext } from '../../contexts/DropdownContext';

const Dropdown = () => {
  const { isOpen, toggleDropdown } = useContext(DropdownContext);
  const handleClose = (e) => {
    if (e.target.classList.contains(styles.dropdownoverlay)) {
      toggleDropdown();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.dropdownoverlay} onClick={handleClose}>
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
    </div>
  );
};

export default Dropdown;
