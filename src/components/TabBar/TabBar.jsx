import React from 'react';
import styles from './TabBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon
          className={`${styles.filtericon} ${styles.mobile}`}
          icon={faFilter}
        />
        <div className={` ${styles.show} ${styles.desktop}`}>
          <p>Show:</p>
          <p className={styles.current}>All</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </button>
    </div>
  );
};

export default TabBar;
