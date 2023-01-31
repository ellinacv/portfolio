import styles from './Footer.module.css';

import { MailIcon } from '../../svg/MailIcon';
import { GithubIcon } from '../../svg/GithubIcon';
import { LinkedInIcon } from '../../svg/LinkedInIcon';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <ul id="contacts" className={styles.social}>
            <li className={styles.social__item}>
              <a href="mailto:ellina.dev@rambler.ru" title="E-Mail">
                <MailIcon height="38" />
              </a>
            </li>
            <li className={styles.social__item}>
              <a href="https://github.com/ellinacv" title="Github">
                <GithubIcon height="38" />
              </a>
            </li>
            <li className={styles.social__item}>
              <a
                href="https://www.linkedin.com/in/ellina-legostaeva-395070260"
                title="LinkedIn"
              >
                <LinkedInIcon height="38" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
