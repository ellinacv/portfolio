import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Project.module.css';

export const Project = ({ title, img, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className={styles.list__item}>
        <img src={img} alt={title} className={styles.img} />
        <h3 className={styles.title}>{title}</h3>
      </li>
    </NavLink>
  );
};
