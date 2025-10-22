import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styles from '../styles/Darkmode.module.css';
import Image from 'next/image';
import { trackThemeToggle } from '../lib/analytics';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    trackThemeToggle(newTheme);
  };

  return (
    <div
      className={styles.toggleContainer}
      onClick={handleToggle}
      role="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      data-track-label={`Theme Toggle: ${isDark ? 'Light' : 'Dark'} Mode`}
    >
      <Image 
        src="/moon.png" 
        className={styles.moon} 
        alt="moon" 
        width={16} 
        height={16}
      />
      <Image 
        src="/sun.png" 
        className={styles.sun} 
        alt="sun" 
        width={16} 
        height={16}
      />
      <div 
        className={styles.ball}
        style={{
          left: isDark ? '3px' : '27px',
        }}
      ></div>
    </div>
  );
};

export default ThemeChanger;
