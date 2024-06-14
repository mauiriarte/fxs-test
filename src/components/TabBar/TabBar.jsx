import React from 'react';
import styles from './TabBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const TabBar = ({ activeTab, setActiveTab }) => {
  return (
    <div className={styles.tabbar}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === 'latest' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('latest')}
        >
          Latest
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === 'popular' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('popular')}
        >
          Popular
        </button>
      </div>
      <button className={styles.filterbutton}>
        <FontAwesomeIcon className={styles.filtericon} icon={faFilter} />
      </button>
    </div>
  );
};

export default TabBar;
