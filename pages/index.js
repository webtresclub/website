import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WebtrES</title>
        <meta name="description" content="Sitio Eb de la comunidad WebtrES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Desarrollo && Web3
        </p>
        <h1 className={styles.title}>
          Bienvenido a <a href="https://discord.gg/eegRCDmwbM">WebtrES</a>
        </h1>

        <p className={styles.description}>
          Somos una comunidad hispanohablante apasionada por el desarrollo Web 3.0
          integrada por desarrolladores de diferentes ramas, todos contibuyendo a que el
          aprendizaje sea mas ameno y divertido en conjunto
        </p>

        <div className={styles.wrapperButton}>
          <a href="https://discord.gg/eegRCDmwbM">
          <button className={styles.blueButton}>Unirme en Discord</button>
          </a>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
