import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styles from '../styles/Darkmode.module.css';
import Image from 'next/image';

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

  return (
    <div
      className={styles.toggleContainer}
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
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
          left: isDark ? '3px' : '28px',
        }}
      ></div>
    </div>
  );
};

export default ThemeChanger;
