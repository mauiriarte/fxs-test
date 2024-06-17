import React from 'react';
import styles from './NavBar.module.css';
import logo from '../../assets/FXStreetPremium.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBars,
  faHouse,
  faBell,
  faSliders,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt='Logo of the company' />
      <div className={styles.navbaricons}>
        <div className={styles.centralbox}>
          <div className={`${styles.pagetitle} ${styles.desktop}`}>
            <FontAwesomeIcon icon={faHouse} />
            <h2>Home</h2>
          </div>
          <div className={`${styles.premium} ${styles.desktop}`}>
            <FontAwesomeIcon icon={faStar} />
            <h2>New stuff!</h2>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className={`${styles.icon} ${styles.mobile}`}
        />
        <div className={styles.secondaryboxes}>
          <div className={`${styles.iconbox} ${styles.desktop}`}>
            <FontAwesomeIcon icon={faSliders} />
          </div>
          <div className={`${styles.iconbox} ${styles.desktop}`}>
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className={styles.userbox}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <p className={`${styles.username} ${styles.desktop}`}>Mauricio</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
