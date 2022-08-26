import { useTheme } from 'next-themes'
import styles from '../styles/Darkmode.module.css'
import Image from 'next/image'
// import sun from "../images/sun.png"
// import moon from "../images/moon.png"


const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    
      <div id={styles.toggleContainer} onClick={() => {
        setTheme(theme === "light" ? "dark" : "light")
      }}>
        <div id={styles.ball} className={styles.lightTheme}></div>
        {/* <Image src={sun} className={styles.themeImg} id={styles.sun} alt="sun" />
        <Image src={moon} className={styles.themeImg} id={styles.moon} alt="moon" /> */}
      </div>
  )
}

export default ThemeChanger;