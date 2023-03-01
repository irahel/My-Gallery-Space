import Photos from './photos.json';
import styles from './Popular.module.scss';

function Popular() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>
            {Photos.map((photo) => {
                return (
                    <li key={photo.id}>
                        <img src={photo.path} alt={photo.alt} />
                    </li>
                )
            }
            )}

        </ul>
        <button>Ver mais fotos</button>
    </aside>
  )
}

export default Popular