"use client"

import styles from '../src/app/page.module.css'

export function Header(props) {
  return (
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          {props.children}
        </p>

      </div>
  )
}
