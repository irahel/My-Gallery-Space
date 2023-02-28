import Card from './Card'

function Cards({photos, styles}) {
  return (
    <ul className={styles.galeria__cards}>
          {photos.map((photo) => {
            return (
              <Card photo={photo} styles={styles} />
            )})
          }
        </ul>
  )
}

export default Cards