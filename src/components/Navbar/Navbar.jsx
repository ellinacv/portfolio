import React from 'react';
import styles from './Navbar.module.css';

import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';

export const Navbar = () => {
  return (
    <nav className={styles.content}>
      <div className="container">
        <div className={styles.row}>
          <a href="/" className={styles.logo}>
            <strong>{'{ellinacv}'}</strong>
          </a>

          <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>

          <ul className={styles.list}>
            <li className={styles.list__item}>
              <a
                href="#skills"
                className={`${styles.list__link} ${styles.list__link__active}`}
              >
                Skills
              </a>
            </li>
            <li className={styles.list__item}>
              <a href="#projects" className={styles.list__link}>
                Projects
              </a>
            </li>
            <li className={styles.list__item}>
              <a href="#contacts" className={styles.list__link}>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
