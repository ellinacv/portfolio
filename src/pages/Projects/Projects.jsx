import React from 'react';
import { projects } from '../../data/projectList';
import { Project } from '../../components/Project/Project';
import styles from './Projects.module.css';

export const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className={styles.list}>
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
