import React from 'react';
import styles from './NavBar.module.css';
import logo from '../../assets/FXStreetPremium.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt='Logo of the company' />
      <div className={styles.navbaricons}>
        <FontAwesomeIcon icon={faBars} className={styles.icon} />
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
      </div>
    </nav>
  );
};

export default NavBar;
