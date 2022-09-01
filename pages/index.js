import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ThemeChanger from '../components/darkmode';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WebtrES</title>
        <meta name="description" content="Sitio Web de la comunidad WebtrES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ThemeChanger />
        <p className={styles.description}>
          La comunidad más diversa sobre Desarrollo && Web3
        </p>
        <h1 className={styles.title}>
          Bienvenido a <a href="https://discord.gg/eegRCDmwbM">WebtrES</a>.
        </h1>

        <p className={styles.description}>
          ¿Quienes somos? <br/>
          Somos una comunidad hispanohablante apasionada por el desarrollo Web 3.0
          integrada por devs de diferentes ámbitos, todos contibuyendo a que el
          aprendizaje sea mas ameno y divertido en conjunto, dentro de nuestra comunidad encontrarás
          diferentes personajes divertidos y extravagantes, cada uno con algo particular que lo distingue.
          ¿Como comenzo todo? <br/>
          En Agosto de 2021 una personita entusiasta dentro del mundo del desarrollo, comenzo a enseñar
          sobre tecnología y dessarrollo en blockchain mediante contenido audiovisual, sí esta personita es
          nada mas ni nada menos que <a href=''>@martriay</a>, a ese genial acontecimiento
          lo siguio el armado de nuestro <a href='https://discord.gg/eegRCDmwbM'>Servidor de discord</a>, donde habita hoy nuestra gran comunidad.
          ¿Queres formar parte de nuestra comunidad? <br/>
          Son bienvenidxs quienes busquen aprender sobre desarrollo y seguridad en web3, tanto como quienes
          tengan conocimientos y quieran aportar, somos una comunidad disruptiva, sin esquemas, con ganas de que
          el aprender no sea algo aburrido ni solitario, dentro de nuestra comunidad encontrás diferentes personajes
          como <a href=''></a>@AlanX, @Magnetto, @tqts, @0x4non, <a href=''></a>@P4 Troy, <a href=''></a> @bengalaQ, @AgusDuha, @mmolinari.eth, y la leyenda de
          la seguridad y auditoria en blockchain <a href=''>@tnch</a> entre muuuchisimos otrxs cracks, estas listx para conocerlxs? 
          Sumate a nuesto Discord 🚀
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
