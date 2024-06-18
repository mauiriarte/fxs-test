import React from 'react';
import styles from './RightColumn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const RightColumn = () => {
  return (
    <div className={styles.column}>
      <div className={styles.widget}>
        <h2>Exchange Rate</h2>
        <div className={styles.exchange}>
          <img
            src='https://cdn.insideflow.com/media/com_easysocial/photos/1/2/fa0e5898646d24ba2009a5258f14fb05_large.png'
            alt='Flag of Japan'
          />
          <p>1</p>
          <p>-</p>
          <p>0.0059</p>
          <img
            src='https://ec.europa.eu/regional_policy/images/information-sources/logo-download-center/eu_flag.jpg'
            alt='European Union flag'
          />
        </div>
      </div>
      <button className={styles.columnbutton}>
        <p>Add widgets</p>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default RightColumn;
