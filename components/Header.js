import React from 'react';
import ThemeChanger from '../components/darkmode';

export default function Header() {
  return (
    <header style={{ position: 'absolute', top: 0, right: 0, zIndex: 9999 }} className="px-5 py-5">
      <ThemeChanger />
    </header>
  );
}
