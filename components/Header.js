import React from 'react';
import ThemeChanger from '../components/darkmode';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="px-5 py-5 w-full">
      <div className="container flex flex-rowmx-auto justify-between max-w-5xl m-auto">
        <div>
          <ul className={styles.navbar}>
            <li>
              <Link href="/"> Home</Link>
            </li>
            <li>
              <Link href="/halloffame"> Hall of Fame🏆</Link>
            </li>
          </ul>
        </div>
        <ThemeChanger />
      </div>
    </header>
  );
}
