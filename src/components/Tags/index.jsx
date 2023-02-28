import styles from './Tags.module.scss'

function Tags() {
  return (
    <div className={styles.tags}>
        <p>Filtre por tags:</p>
        <ul className={styles.tags__lista}>
            <li>Estrelas</li>
            <li>Galáxias</li>
            <li>Planetas</li>
            <li>Luas</li>

        </ul>
    </div>
  )
}

export default Tags