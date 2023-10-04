import Image from 'next/image'
import classes from './Links.module.css'

export function Links() {
  return (
    <div className={classes.grid}>
    <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={classes.card}
        target="_blank"
        rel="noopener noreferrer"
        
    >
        <h2 className={classes.title}>
        Docs <span>-&gt;</span>
        </h2>
        <p className={classes.description}>Find in-depth information about Next.js features and API.</p>
    </a>

    <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={classes.card}
        target="_blank"
        rel="noopener noreferrer"
    >
        <h2 className={classes.title}>
        Learn <span>-&gt;</span>
        </h2>
        <p className={classes.description}>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    </a>

    <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={classes.card}
        target="_blank"
        rel="noopener noreferrer"
    >
        <h2 className={classes.title}>
        Templates <span>-&gt;</span>
        </h2>
        <p className={classes.description}>Explore the Next.js 13 playground.</p>
    </a>

    <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={classes.card}
        target="_blank"
        rel="noopener noreferrer"
    >
        <h2 className={classes.title}>
        Deploy <span>-&gt;</span>
        </h2>
        <p className={classes.description}>
        Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
    </a>
    </div>
  )
}
