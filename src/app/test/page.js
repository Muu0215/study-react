import Image from 'next/image'
import styles from '../page.module.css'
import { Links } from '../../../components/Links'
import { Header } from '../../../components/Header'

export default function Home() {
  return (
    <main className={styles.main}>

      <Header page="test" />

      <div className={styles.description}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>


      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <Links />

    </main>
  )
}
