import styles from './Tags.module.scss'

function Tags({tags, filterPhotos, resetFilter}) {
  return (
    <div className={styles.tags}>
        <p>Filtre por tags:</p>
        <ul className={styles.tags__lista}>
            {tags.map((tag) => <li key={tag} onClick={() => filterPhotos(tag)}>{tag}</li>)}
            <li onClick={()=> resetFilter()}>Todas</li>
        </ul>
    </div>
  )
}

export default Tags