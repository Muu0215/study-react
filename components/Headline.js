"use client"

import classes from './Headline.module.css'

export function Headline(props) {
  return (
      <div className={classes.description}>
        <p>
          Get started by editing&nbsp;
          {props.children}
        </p>

      </div>
  )
}
