import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useTheme } from 'next-themes';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Social from '../components/Social';
import TweetEmbed from '../components/TweetEmbed';

function TimelineCard({ title, date, description, participants, tweetUrl }) {
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
          <h3 className="text-xl mb-2">
            {date} - {title}
          </h3>
          <p>{description}</p>
          {participants && <Participants participants={participants} />}
          {tweetUrl && <TweetEmbed tweetUrl={tweetUrl} />}
        </div>
      </div>
    </div>
  );
}

function sortAchievementsByDate(a, b) {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB - dateA;
}

function Participants({ participants }) {
  return (
    <ul className="mt-2">
      {participants.map((participant, index) => (
        <li key={index}>
          <a
            href={participant}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            @{participant.split('/').pop()}
          </a>
        </li>
      ))}
    </ul>
  );
}

const achievements = [
  {
    title: 'CTF Defi Wonderland - Connext',
    date: '2022-08-13',
    description:
      '🥇 Primer puesto en el CTF organizado por Defi Wonderland y Connext para la ETHLatam 2022.',
    participants: [
      'https://twitter.com/nicobevi_eth',
      'https://twitter.com/0xJuancito',
      'https://twitter.com/eugenioclrc',
      'https://twitter.com/mateomolinari__',
      'https://twitter.com/magnetto_eth',
      'https://twitter.com/rotcivegaf',
    ],
    tweetUrl: 'https://twitter.com/DeFi_Wonderland/status/1558453144387985410?s=20', // Ejemplo de enlace de tweet
  },
  {
    title: 'Scaling @ethereum Hackathon by @ETHGlobal',
    date: '2023-04-03',
    description: '🏅 Great xApp Winner ($500).',
    participants: ['https://twitter.com/chiin_eth'],
    tweetUrl: 'https://twitter.com/ConnextNetwork/status/1642889253913763841',
  },
  // Agrega más logros aquí
  {
    title: 'Code4rena @NeoTokyoCode competition!',
    date: '2023-04-04',
    description: '🥇 Primer puesto en competencia de auditoria de contratos inteligentes.',
    participants: ['https://twitter.com/adrianromero'],
    tweetUrl: 'https://twitter.com/code4rena/status/1643440655044341762?s=20',
  },
  {
    title: 'Code4rena @AragonProject competition!',
    date: '2023-03-29',
    description: '🥇 Primer puesto en competencia de auditoria de contratos inteligentes.',
    participants: ['https://twitter.com/adrianromero'],
    tweetUrl: 'https://twitter.com/code4rena/status/1641197035025203201?s=20',
  },
  {
    title: 'Code4rena @wenwincom competition!',
    date: '2023-03-22',
    description: '🏅 Cuarto puesto en competencia de auditoria de contratos inteligentes.',
    participants: ['https://twitter.com/adrianromero'],
    tweetUrl: 'https://twitter.com/code4rena/status/1638618032259076096?s=20',
  },
  {
    title: 'Code4rena @wenwincom competition!',
    date: '2023-02-08',
    description: '🏅 Cuarto puesto en competencia de auditoria de contratos inteligentes.',
    participants: ['https://twitter.com/adrianromero'],
    tweetUrl: 'https://twitter.com/code4rena/status/1623391984827404288?s=20',
  },
  {
    title: 'Secureum RACE-15',
    date: '2023-02-27',
    description:
      '🥈 Segundo puesto en competencia Secureum RACE-15. Puestos 21 y 25 tambien para la comunidad 😊',
    participants: [
      'https://twitter.com/eugenioclrc',
      'https://twitter.com/Cryptonicle1',
      'https://twitter.com/adrianromero',
    ],
    tweetUrl: 'https://twitter.com/TheSecureum/status/1630164347585708032',
  },
  {
    title: '@InfiniteHackETH',
    date: '2022-10-09',
    description: '🥇 Primer puesto en @InfiniteHackETH Hackathon.',
    participants: ['https://twitter.com/gseba_lujan'],
    tweetUrl: 'https://twitter.com/gseba_lujan/status/1579250179785359360',
  },
  {
    title: '#WEBOWCHALLENGE',
    date: '2022-08-31',
    description: '🥇 Primer puesto en #WEBOWCHALLENGE.',
    participants: ['https://twitter.com/MartinPefaur'],
    tweetUrl: 'https://twitter.com/Webowlatam/status/1565081114137460737',
  },
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
          {achievements
            .sort(sortAchievementsByDate)
            .map(({ title, date, description, tweetUrl, participants }, index) => (
              <TimelineCard
                key={index}
                title={title}
                date={date}
                description={description}
                tweetUrl={tweetUrl}
                participants={participants}
              />
            ))}
        </div>
        <Social />
      </main>
      <Footer />
    </div>
  );
}