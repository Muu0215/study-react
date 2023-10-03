import styles from '../src/app/page.module.css'

export function Header(props) {
    console.info(props);
  return (
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/{props.page}.js</code>
        </p>
      </div>
  )
}
