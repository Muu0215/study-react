"use client"

import Image from 'next/image'
import classes from 'src/app/components/Main/Main.module.css'
import { Links } from 'src/app/components/Links'
import { Headline } from 'src/app/components/Headline'

export function Main(props) {
  return (
    <main className={classes.main}>

      <Headline page="index">
      code={<code className={classes.code}>src/{props.root}/{props.page}.js</code>}
      </Headline>
      

      <div className={classes.description}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={classes.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>


      <div className={classes.center}>
        <Image
          className={classes.logo}
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
