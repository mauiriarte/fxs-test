import React from 'react';
import styles from './LeftMenu.module.css';
import logo from '../../assets/FXStreetPremium.svg';

const LeftMenu = () => {
  return (
    <div className={styles.leftmenu}>
      <img className={styles.logo} src={logo} alt='Logo of the company' />
      <div className={styles.menuitems}>
        <h2>Home</h2>
        <h2>Rates & Charts</h2>
        <h2>News</h2>
        <h2>Analysis</h2>
        <h2>Economic Calendar</h2>
      </div>
    </div>
  );
};

export default LeftMenu;
