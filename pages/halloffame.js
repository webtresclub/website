import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useTheme } from 'next-themes';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Social from '../components/Social';
import TweetEmbed from '../components/TweetEmbed';

function TimelineCard({ title, date, description, tweetUrl }) {
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';

  return (
    <div className={`timeline-card ${textColor} flex flex-row mb-10`}>
      <div className="relative">
        <div className="border-r-2 border-blue-500 h-full mr-4"></div>
        <div className="absolute h-4 w-4 rounded-full bg-blue-500 -left-2 top-1/2 transform -translate-y-1/2"></div>
      </div>
      <div className="relative z-10">
        <div className={`bg-${theme === 'dark' ? 'gray-900' : 'gray-100'} rounded-lg p-4 w-full`}>
          <h3 className="text-xl mb-2">{title}</h3>
          <h4 className="text-blue-500 mb-4">{date}</h4>
          <p>{description}</p>
          {tweetUrl && <TweetEmbed tweetUrl={tweetUrl} />}
        </div>
      </div>
    </div>
  );
}

const achievements = [
  {
    title: 'Primer logro',
    date: '2023-01-01',
    description: 'Descripción del primer logro.',
    tweetUrl: 'https://twitter.com/PatoBullrich/status/1643631502935072772', // Ejemplo de enlace de tweet
  },
  {
    title: 'Segundo logro',
    date: '2023-02-01',
    description: 'Descripción del segundo logro.',
  },
  // Agrega más logros aquí
];

export default function HallOfFame() {
  return (
    <div className={`${styles.container} h-screen w-full`}>
      <Head>
        <title>🏆 Hall of Fame - WebtrES 🏆</title>
        <meta name="description" content="Hall of Fame de la comunidad WebtrES" />
        <link rel="icon" href="favicon.gif" type="image/gif" />
      </Head>
      <Header />
      <main className="flex flex-col align-center justify-center container mx-auto px-10 md:px-0">
        <h1 className={styles.title}>🏆Hall of Fame🏆</h1>
        <div className="flex flex-col items-start">
          {achievements.map(({ title, date, description, tweetUrl }, index) => (
            <TimelineCard
              key={index}
              title={title}
              date={date}
              description={description}
              tweetUrl={tweetUrl}
            />
          ))}
        </div>
        <Social />
      </main>
      <Footer />
    </div>
  );
}
