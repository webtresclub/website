import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Social from '../components/Social';

function UwuImage(props) {
  const { width, height, className = '' } = props;
  return (
    <div className={`mx-auto ${className}`}>
      <Image
        className="uwuloscopio"
        src="/UwUloscopio_big.gif"
        alt="UwUloscopio"
        width={width}
        height={height}
      />
    </div>
  );
}

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
        <p className={styles.description}>
          🔍¿Quiénes somos?🔍
          <br />
          Somos una comunidad hispanohablante apasionada por el desarrollo Web 3.0 integrada por
          devs de diferentes ámbitos, todes contibuyendo a que el aprendizaje sea más ameno y
          divertido en conjunto, dentro de nuestra comunidad encontrarás diferentes personajes
          divertidxs y extravagantes, cada unx con algo particular que lo distingue. 💙 <br />
          📜¿Cómo comenzó todo?📜 <br />
          En Agosto de 2021 una personita entusiasta dentro del mundo del desarrollo, comenzo a
          enseñar sobre tecnología y desarrollo en blockchain mediante contenido audiovisual, sí,
          esta personita es nada mas ni nada menos que{' '}
          <a href="https://twitter.com/martriay">@martriay</a>, a ese genial acontecimiento lo
          siguió el armado de nuestro{' '}
          <a href="https://discord.gg/eegRCDmwbM">Servidor de discord</a>, donde habita hoy nuestra
          gran comunidad. ✨<br />
          👩‍💻¿Querés formar parte de nuestra comunidad?👨‍💻 <br />
          Son bienvenidxs quienes busquen aprender sobre desarrollo y seguridad en web3, tanto como
          quienes tengan conocimientos y quieran aportar, somos una comunidad disruptiva, sin
          esquemas, con ganas de que el aprender no sea algo aburrido ni solitario, dentro de
          nuestra comunidad encontrás diferentes personajes como{' '}
          <a href="https://twitter.com/alandooz">@AlanX</a>,{' '}
          <a href="https://twitter.com/magnetto_eth">@Magnetto</a>, @tqts, @0x4non,{' '}
          <a href="https://twitter.com/MartinPefaur">@P4 Troy</a>,{' '}
          <a href="https://twitter.com/AugustitoQ">@bengalaQ</a>, @AgusDuha, @mmolinari.eth y la
          leyenda de la seguridad en blockchain <a href="https://twitter.com/tinchoabbate">@tnch</a>{' '}
          entre muuuchísimos otrxs cracks, estás listx para conocer al resto de esta fantástica
          banda? Sumate a nuesto Discord haciendo click en el siguiente botón. 🚀
        </p>

        <a href="https://discord.gg/eegRCDmwbM" className="mx-auto">
          <Image className="discord" src="/discord.png" alt="discord" width={150} height={150} />
        </a>

        <p className={styles.description}>
          👩‍💻¿Querés empezar a aprender y no sabés por donde?📖 <br />
          No te preocupes, acá abajo te dejamos unos links que te pueden ayudar 🥳 💫
        </p>

        <div className={`${styles.grid} mx-auto`}>
          <a
            href="https://intro-ethereum.marto.lol/"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Web de Martín Triay</h2>
            <p>En su website vas a encontrar info para iniciar en Web3.</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=zoJb3G8TQcE&list=PLA0EjXXZSf4fWVXHH__NgZC8lFiJP-8cT"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Video 1 @matriay</h2>
            <p>Introducción a Eth Development.</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=i1IW9lK4mQw&list=PLA0EjXXZSf4fWVXHH__NgZC8lFiJP-8cT&index=2"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Video 2 @matriay</h2>
            <p>Continuación video 1.</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=dnxfqmjNAtQ&t=5s"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Video 3 @martriay</h2>
            <p>
              Introducción a <br />
              DeFi Development.
            </p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=H8sbS9V6gVY"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Video 4 @martriay</h2>
            <p>
              Continuación a <br />
              video 3.
            </p>
          </a>

          <a
            href="https://www.notonlyowner.com/learn/intro-seguridad-hacking-ethereum"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Web de Martín Abbatemarco</h2>
            <p>En su web vas a poder encontrar muchisima info sobre seguridad en Web3.</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=sqjHodAj5Xc&t=582s"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Video 1 @tnch</h2>
            <p>
              Introducción a <br />
              Seguridad en eth.
            </p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=CEzERbkVAhk"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Video 2 @tnch</h2>
            <p>
              Continuación a <br />
              video 1.
            </p>
          </a>
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
