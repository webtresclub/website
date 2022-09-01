import React from 'react';
import ThemeChanger from '../components/darkmode';

export default function Header() {
  return (
    <header className="px-5 py-5 w-full">
      <div className="container flex flex-rowmx-auto justify-end">
        <ThemeChanger />
      </div>
    </header>
  );
}
