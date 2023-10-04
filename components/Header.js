"use client"

import classes from './Header.module.css'

export function Header(props) {
  return (
      <div className={classes.description}>
        <p>
          Get started by editing&nbsp;
          {props.children}
        </p>

      </div>
  )
}
