import React from 'react';
import { useState, useEffect, useRef } from 'react';
import detectDarkMode from '../utils/detectDarkMode';
import { SunIcon } from './svgBtn/SunIcon';
import { MoonIcon } from './svgBtn/MoonIcon';
import styles from './BtnDarkMode.module.css';

export const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useState(detectDarkMode);
  const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
      btnRef.current.classList.add(styles.btn_active);
    } else {
      document.body.classList.remove('dark');
      btnRef.current.classList.remove(styles.btn_active);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light';
    });
  };

  return (
    <div>
      <button ref={btnRef} className={styles.btn} onClick={toggleDarkMode}>
        <SunIcon height="16" className={styles.btn__icon} isDark />
        <MoonIcon height="16" className={styles.btn__icon} isDark />
      </button>
    </div>
  );
};
