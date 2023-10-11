import Link from "next/link"
import classes from "src/app/components/Header/Header.module.css"

export function Header() {
    return (
        <header className={classes.header}>
            <Link href="/" className={classes.anchor}>
                Index
            </Link>
            <Link href="/test" className={classes.anchor}>
                Test
            </Link>
        </header>
    )
}