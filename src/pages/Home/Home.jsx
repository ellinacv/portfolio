import React from 'react';
import { Header } from '../../components/Header/Header';

export const Home = () => {
  return (
    <>
      <Header />
      <main class="section">
        <div class="container">
          <ul class="content-list">
            <li class="content-list__item">
              <h2 class="title-2">Frontend</h2>
              <p>
                HTML, CSS, SCSS, JavaScript, ReactJS, Redux, NPM, Yarn,
                Bootstrap, TailwindCSS, StyledComponents
              </p>
            </li>
            <li class="content-list__item">
              <h2 class="title-2">CMS</h2>
              <p>Tilda, Wordpess, Opencart</p>
            </li>
            <li class="content-list__item">
              <h2 class="title-2">Tools</h2>
              <p>Figma, Adobe Photoshop, GitHub, GitLab, Jira</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
