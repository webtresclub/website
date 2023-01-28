import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useTheme } from 'next-themes';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Social from '../components/Social';

function UwuImage(props) {
  const { width, height, className = '' } = props;
  const { theme } = useTheme();
  return (
    <div className={`mx-auto ${className}`}>
      <Image
        className="uwuloscopio"
        src={theme !== 'light' ? '/darkmode/UwUloscopio_big.gif' : '/UwUloscopio_big.gif'}
        alt="UwUloscopio"
        width={width}
        height={height}
      />
    </div>
  );
}

function BoxLink(props) {
  const { link, title, content } = props;
  return (
    <a
      href={link}
      className="border-2 rounded-md m-4 p-5 md:w-64 hover:border-blue-600 hover:text-blue-600 easy-out duration-150"
      target="_blank"
      rel="noreferrer"
    >
      <h2 className="text-2xl mb-5">{title}</h2>
      <p className="text-xl">{content}</p>
    </a>
  );
}

const contentLinks = [
  {
    title: 'Web de Martín Triay',
    link: 'https://intro-ethereum.marto.lol/',
    content: 'En su website vas a encontrar info para iniciar en Web3.',
  },
  {
    title: 'Video 1 @martriay',
    link: 'https://www.youtube.com/watch?v=zoJb3G8TQcE&list=PLA0EjXXZSf4fWVXHH__NgZC8lFiJP-8cT',
    content: 'Introducción a Eth Development.',
  },
  {
    title: 'Video 2 @martriay',
    link: 'https://www.youtube.com/watch?v=i1IW9lK4mQw&list=PLA0EjXXZSf4fWVXHH__NgZC8lFiJP-8cT&index=2',
    content: 'Continuación video 1.',
  },
  {
    title: 'Video 3 @martriay',
    link: 'https://www.youtube.com/watch?v=dnxfqmjNAtQ&t=5s',
    content: 'Introducción a DeFi Development.',
  },
  {
    title: 'Video 4 @martriay',
    link: 'https://www.youtube.com/watch?v=H8sbS9V6gVY',
    content: 'Continuación a video 3.',
  },
  {
    title: 'Video 5 @martriay',
    link: 'https://www.youtube.com/watch?v=H8sbS9V6gVY',
    content: 'Introducción a Rollups.',
  },
  {
    title: 'Web de Martín Abbatemarco',
    link: 'https://www.notonlyowner.com/learn/intro-seguridad-hacking-ethereum',
    content: 'En su web vas a poder encontrar muchisima info sobre seguridad en Web3.',
  },
  {
    title: 'Video 1 @tnch',
    link: 'https://www.youtube.com/watch?v=sqjHodAj5Xc&t=582s',
    content: 'Introducción a Seguridad en eth.',
  },
  {
    title: 'Video 2 @tnch',
    link: 'https://www.youtube.com/watch?v=CEzERbkVAhk',
    content: 'Continuación a video 1.',
  },
];

export default function Home() {
  return (
    <div className={`${styles.container} h-screen w-full`}>
      <Head>
        <title>WebtrES</title>
        <meta name="description" content="Sitio Web de la comunidad WebtrES" />
        <link rel="icon" href="favicon.gif" type="image/gif" />
      </Head>
      <Header />
      <main className="flex flex-col align-center justify-center container mx-auto px-10 md:px-0">
        <h1 className={styles.title}>
          Bienvenidx a <br />
          <a href="https://discord.gg/eegRCDmwbM">WebtrES</a>
        </h1>

        <UwuImage width="360" height="300" />

        <p className={styles.description}>La comunidad más grande y diversa sobre Web3</p>
        <div className={`${styles.description} !mt-0`}>
          <h2 className="mb-5 mt-10 text-3xl">🔍¿Quiénes somos?🔍</h2>
          <p>
            Somos una comunidad hispanohablante apasionada por el desarrollo Web 3.0 integrada por
            devs de diferentes ámbitos, todes contibuyendo a que el aprendizaje sea más ameno y
            divertido en conjunto, dentro de nuestra comunidad encontrarás diferentes personajes
            divertidxs y extravagantes, cada unx con algo particular que lo distingue. 💙
          </p>
          <h2 className="mb-5 mt-10 text-3xl">📜¿Cómo comenzó todo?📜 </h2>
          <p>
            En Agosto de 2021,{' '}
            <a
              className="text-blue-500"
              href="https://twitter.com/martriay"
              target="_blank"
              rel="noreferrer"
            >
              @martriay
            </a>
            , un entusiasta dentro del mundo del desarrollo, llevo a cabo una serie de directos en
            Youtube/Twitch enseñando sobre tecnología y desarrollo en blockchain, como consecuencia
            de esa serie de cursos se creó nuestro{' '}
            <a
              className="text-blue-500"
              href="https://discord.gg/eegRCDmwbM"
              target="_blank"
              rel="noreferrer"
            >
              Servidor de discord
            </a>
            , donde habita hoy nuestra gran comunidad. ✨
          </p>
          <h2 className="mb-5 mt-10 text-3xl">👩‍💻¿Querés formar parte de nuestra comunidad?👨‍💻 </h2>
          <p>
            Son bienvenidxs quienes busquen aprender sobre desarrollo y seguridad en web3, tanto
            como quienes tengan conocimientos y quieran aportar, somos una comunidad disruptiva, sin
            esquemas, con ganas de que el aprender no sea algo aburrido ni solitario, dentro de
            nuestra comunidad encontrás diferentes personajes como{' '}
            <a
              className="text-blue-500"
              href="https://twitter.com/alandooz"
              target="_blank"
              rel="noreferrer"
            >
              @AlanX
            </a>
            ,{' '}
            <a
              className="text-blue-500"
              href="https://twitter.com/magnetto_eth"
              target="_blank"
              rel="noreferrer"
            >
              @Magnetto
            </a>
            ,{' '}
            <a
              className="text-blue-500"
              href="https://twitter.com/tqtsar"
              target="_blank"
              rel="noreferrer"
            >
              @tqts
            </a>
            ,{' '}
            <a
              className="text-blue-500"
              href="https://twitter.com/eugenioclrc"
              target="_blank"
              rel="noreferrer"
            >
              @0x4non
            </a>
            ,{' '}
            <a
              className="text-blue-500"
              href="https://twitter.com/MartinPefaur"
              target="_blank"
              rel="noreferrer"
            >
              @P4 Troy
            </a>
            ,{' '}
            <a
              className="text-blue-500"
              href="https://twitter.com/AugustitoQ"
              target="_blank"
              rel="noreferrer"
            >
              @bengalaQ
            </a>
            ,{' '}
            <a
              className="text-blue-500"
              href="https://twitter.com/AgusDuha"
              target="_blank"
              rel="noreferrer"
            >
              @AgusDuha
            </a>
            ,{' '}
            <a
              className="text-blue-500"
              href="https://twitter.com/mmolinari"
              target="_blank"
              rel="noreferrer"
            >
              @mmolinari.eth
            </a>{' '}
            y la leyenda de la seguridad en blockchain{' '}
            <a
              className="text-blue-500"
              href="https://twitter.com/tinchoabbate"
              target="_blank"
              rel="noreferrer"
            >
              @tnch
            </a>{' '}
            entre muuuchísimos otrxs cracks, estás listx para conocer al resto de esta fantástica
            banda? Sumate a nuesto Discord haciendo click en el siguiente botón. 🚀
          </p>
        </div>

        <a href="https://discord.gg/eegRCDmwbM" className="mx-auto">
          <Image className="discord" src="/discord.png" alt="discord" width={150} height={150} />
        </a>

        <p className={styles.description}>
          👩‍💻¿Querés empezar a aprender y no sabés por donde?📖 <br />
          No te preocupes, acá abajo te dejamos unos links que te pueden ayudar 🥳 💫
        </p>

        <div className="flex flex-row justify-center items-stretch flex-wrap w-full md:max-w-screen-md m-auto">
          {contentLinks.map(({ title, link, content }, index) => (
            <BoxLink title={title} content={content} link={link} key={index} />
          ))}
        </div>

        <UwuImage width={90} height={75} />

        <div className={styles.wrapperButton}>
          <a href="https://discord.gg/eegRCDmwbM">
            <button className={styles.blueButton}>Unirme en Discord</button>
          </a>
        </div>

        <Social />
      </main>
      <Footer />
    </div>
  );
}
