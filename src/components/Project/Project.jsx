import React from 'react';
import styles from './Project.module.css';

export const Project = ({ title, img }) => {
  return (
    <div>
      <li className={styles.list__item}>
        <a href="#!">
          <img src={img} alt={title} className={styles.img} />
          <h3 className={styles.title}>{title}</h3>
        </a>
      </li>
    </div>
  );
};
