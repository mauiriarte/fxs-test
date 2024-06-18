import React from 'react';
import styles from './RightColumn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const RightColumn = () => {
  return (
    <div className={styles.column}>
      <div className={styles.widget}></div>
      <button className={styles.columnbutton}>
        <p>Add widgets</p>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default RightColumn;
