import React from 'react';
import styles from './RightColumn.module.css';

const RightColumn = () => {
  return (
    <div className={styles.column}>
      <div className={styles.widget}></div>
      <button className={styles.columnbutton}></button>
    </div>
  );
};

export default RightColumn;
