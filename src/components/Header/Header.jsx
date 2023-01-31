import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <strong>
            Hi, I'm <em>Ellina</em>
          </strong>
          <br />
          Jr. frontend developer
        </h1>
        <div className={styles.text}>
          <p>with passion for learning and creating</p>
        </div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};
