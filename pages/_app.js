import React, { useEffect } from 'react';
import '../styles/globals.css';

import { ThemeProvider } from 'next-themes';
import { initAutoTracking } from '../lib/analytics';

function MyApp({ Component, pageProps }) {
  // Initialize auto-tracking on mount
  useEffect(() => {
    initAutoTracking();
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
