import Image from 'next/image'
import classes from 'src/app/components/Links/Links.module.css'

const ITEMS = [
    {
    href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title:"Docs \u2192",
    description:"Find in-depth information about Next.js features and API.",
    },
    {
    href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title:"Learn \u2192",
    description:"Learn about Next.js in an interactive course with&nbspquizzes!.",
    },
    {
    href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title:"Templates \u2192",
    description:"Explore the Next.js 13 playground.",
    },
    {
    href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title:"Deploy \u2192",
    description:"Instantly deploy your Next.js site to a shareable URL with Vercel.",
    }
]

export function Links() {
  return (
    <div className={classes.grid}>
        {ITEMS.map(item => {
            return (
                <a
                key={item.href}
                href={item.href}
                className={classes.card}
                target="_blank"
                rel="noopener noreferrer"
                
                >
                <h2 className={classes.title}>
                {item.title}
                </h2>
                <p className={classes.description}>{item.description}</p>
                </a>
        

            )
        })}
    </div>
  )
}
