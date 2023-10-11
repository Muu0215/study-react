"use client"

import classes from 'src/app/components/Headline/Headline.module.css'

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
