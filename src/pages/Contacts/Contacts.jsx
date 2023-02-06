import React from 'react';
import styles from './Contacts.module.css';

export const Contacts = () => {
  return (
    <section id="contacts" className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className={styles.list}>
          <li className={styles.list__item}>
            <h2 className="title-2">Current Location</h2>
            <p>📍 Batumi, Georgia</p>
          </li>
          <li className={styles.list__item}>
            <h2 className="title-2">Telegram</h2>
            <a href="https://t.me/ellinacv">💬 @ellinacv</a>
          </li>
          <li className={styles.list__item}>
            <h2 className="title-2">Email</h2>
            <a href="mailto:ellina.dev@rambler.ru">📬 ellina.dev@rambler.ru</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
