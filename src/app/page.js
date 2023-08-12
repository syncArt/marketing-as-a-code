import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <a
          href="https://discord.gg/2YDMMMdjEj"
          target="_blank"
          rel="noopener noreferrer"
      >
        <Image
            src="/syncArt.svg"
            alt="Sync Art"
            className={styles.logo}
            priority
            fill
        />
      </a>
    </main>
  )
}
