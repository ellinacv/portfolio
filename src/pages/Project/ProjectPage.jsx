import React from 'react';
import { useParams } from 'react-router-dom';
import { GithubIcon } from '../../svg/GithubIcon';
import { projects } from '../../data/projectList';

import styles from './Project.module.css';

export const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <section className="section">
      <div className="container">
        <div className={styles.details}>
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            title={project.title}
            alt="Pricture"
            className={styles.details__cover}
          />

          <div className={styles.details__desc}>
            <p>Skills: {project.skills}</p>
          </div>

          <a href={project.githubLink} className="btn-outline">
            <GithubIcon height="38" isDark />
            GitHub repo
          </a>
        </div>
      </div>
    </section>
  );
};
