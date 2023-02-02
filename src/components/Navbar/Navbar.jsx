import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';

const getActiveClassName = ({ isActive }) =>
  isActive
    ? `${styles.list__link} ${styles.list__link_active}`
    : styles.list__link;

export const Navbar = () => {
  return (
    <nav className={styles.content}>
      <div className="container">
        <div className={styles.row}>
          <NavLink to="/" className={styles.logo}>
            <strong>{'{ellinacv}'}</strong>
          </NavLink>
          <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>

          <ul className={styles.list}>
            <li className={styles.list__item}>
              <NavLink to="/projects" className={getActiveClassName}>
                Projects
              </NavLink>
            </li>
            <li className={styles.list__item}>
              <NavLink to="/contacts" className={getActiveClassName}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
