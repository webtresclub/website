import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useTheme } from 'next-themes';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Social from '../components/Social';
import TweetEmbed from '../components/TweetEmbed';
import FloatingDiscordButton from '../components/FloatingButton';

function TimelineCard({ title, date, description, participants, tweetUrl }) {
  return (
    <div
      className={`${styles.timelineCard} mx-auto text-black dark:text-white flex flex-row mb-10 w-full max-w-2xl`}
    >
      <div className="relative">
        <div className="h-full mr-4 border-r-2 border-blue-500"></div>
        <div className="absolute w-4 h-4 transform -translate-y-1/2 bg-blue-500 rounded-full -left-2 top-1/2"></div>
      </div>
      <div className="relative z-10 w-full">
        <div className="w-full p-4 bg-gray-100 rounded-lg dark:bg-gray-900">
          <h3 className="mb-2 text-xl">
            {date} -{' '}
            <a className="text-blue-500 hover:text-blue-700" href={tweetUrl}>
              {title}
            </a>
          </h3>
          <p>{description}</p>
          {participants && <Participants participants={participants} />}
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
      'https://twitter.com/magnetto90',
      'https://twitter.com/rotcivegaf',
    ],
    tweetUrl: 'https://twitter.com/DeFi_Wonderland/status/1558453144387985410?s=20', // Ejemplo de enlace de tweet
  },
  {
    title: 'Scaling Ethereum Hackathon by @ETHGlobal',
    date: '2023-04-03',
    description: '🏅 Great xApp Winner',
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
    title: 'Code4rena @CantoNamespace competition!',
    date: '2023-04-21',
    description: '🥈 segundo puesto en competencia de auditoria de contratos inteligentes.',
    participants: ['https://twitter.com/adrianromero'],
    tweetUrl: 'https://twitter.com/code4rena/status/1649279929534775296',
  },
  {
    title: 'Code4rena @OndoFinance competition!',
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
  {
    title: '#ETHDenver hackathon!',
    date: '2023-03-02',
    description: '🥉 Tercer puesto en #ETHDenver hackathon!.',
    participants: ['https://twitter.com/nicobevi_eth'],
    tweetUrl: 'https://twitter.com/reserveprotocol/status/1631423398357393408',
  },

  {
    title: '#ETHDenver hackathon!',
    date: '2023-03-02',
    description: '🏅 Quinto puesto en #ETHDenver hackathon!.',
    participants: ['https://twitter.com/eugenioclrc', 'https://twitter.com/rotcivegaf'],
    tweetUrl: 'https://twitter.com/reserveprotocol/status/1631423403365404672',
  },
  {
    title: 'SolidityScan #FindTheBug',
    date: '2023-03-14',
    description: '🥇 Primer puesto en el 1er #FindTheBug.',
    participants: ['https://twitter.com/devnet0x'],
    tweetUrl: 'https://twitter.com/SolidityScan/status/1635623487313264641',
  },
  {
    title: 'SolidityScan #FindTheBug',
    date: '2023-03-17',
    description: '🥈 Segundo puesto en el 2do #FindTheBug.',
    participants: ['https://twitter.com/devnet0x'],
    tweetUrl: 'https://twitter.com/SolidityScan/status/1636599244634345472',
  },
  {
    title: '#ETHPorto hackathon!.',
    date: '2023-03-18',
    description: '🥉 Tercer puesto en #ETHPorto hackathon!.',
    participants: ['https://twitter.com/Deivitto', 'https://twitter.com/Cryptonicle1'],
    tweetUrl: 'https://twitter.com/eth_porto/status/1637157159682097152',
  },
  {
    title: 'Hackathon #KingOfDevs.',
    date: '2023-04-23',
    description: '🥇 Primer puesto en hackathon #KingOfDevs.',
    participants: [
      'https://twitter.com/eugenioclrc',
      'https://twitter.com/nicobevi_eth',
      'https://twitter.com/rotcivegaf',
    ],
    tweetUrl: 'https://twitter.com/thinkanddev/status/1650271127493550080',
  },
  {
    title: 'Code4rena 60-day leaderboard',
    date: '2023-04-30',
    description: '🥈 segundo puesto en competencia de auditoria de contratos inteligentes.',
    participants: ['https://twitter.com/adrianromero'],
    tweetUrl: 'https://twitter.com/code4rena/status/1652774944185683968',
  },
  {
    title: 'Colaboración en repositorio Solady',
    date: '2023-05-27',
    description:
      'Añadir función toInt256(uint256 x) Convierte un uint256 sin signo en un int256 con signo. Basado en la implementación de OZ en SafeCast.sol#L1131.',
    participants: ['https://twitter.com/eugenioclrc'],
    tweetUrl: 'https://github.com/Vectorized/solady/pull/436#event-9358898407',
  },
  {
    title: '100 estrellas en repositorio multichain-auditor de 0xJuancito',
    date: '2023-05-26',
    description:
      'Juancito llego a las 100 estrellas en su repo https://github.com/0xJuancito/multichain-auditor',
    participants: ['https://twitter.com/0xJuancito'],
    tweetUrl: 'https://twitter.com/0xJuancito/status/1662264278617927680',
  },
  {
    title: 'Bug en Solmate',
    date: '2023-08-07',
    description:
      'magnetto encuentra y reporta un bug en la función SignedWadMath:wadMul de la librería Solmate',
    participants: ['https://twitter.com/magnetto90'],
    tweetUrl: 'https://twitter.com/transmissions11/status/1688601302371389440',
  },
  {
    title: '🥇 Buildathon de Ethereum Argentina - Track: DEFI',
    date: '2023-08-16',
    description:
      '🥇 primer puesto en Buildathon de Ethereum Argentina con NoirCash.',
    participants: [
    'https://twitter.com/eugeclrc',
    'https://twitter.com/rotcivegaf',
    'https://twitter.com/nicobevi_eth'],
    tweetUrl: 'https://twitter.com/EtherArgentina/status/1696275501009035721',
  },
  {
    title: '🥇 Buildathon de Ethereum Argentina - Track: Public Goods',
    date: '2023-08-16',
    description: '🥇 primer puesto en Buildathon de Ethereum Argentina con Veritrust Protocol.',
    participants: [
      'https://twitter.com/MartinPefaur',
      'https://twitter.com/MageHernan',
      'https://twitter.com/LuchoSca',
      'https://twitter.com/TechRebelWorld',
      'https://twitter.com/tomasfrancizco'],
    tweetUrl: 'https://twitter.com/EtherArgentina/status/1696275498760802514',
  },
  {
    title: '🥈 Lens Protocol Competitive Audit',
    date: '2023-09-06',
    description:
      '🥈 segundo puesto en competencia de auditoria de contratos inteligentes.',
    participants: ['https://twitter.com/0xJuancito'],
    tweetUrl: 'https://twitter.com/code4rena/status/1699549855310598540',
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
      <main className="container flex flex-col justify-center px-10 mx-auto align-center md:px-0">
        <h1 className={styles.title}>🏆Hall of Fame🏆</h1> <br />
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
      <FloatingDiscordButton></FloatingDiscordButton>
    </div>
  );
}
