import Tags from '../Tags';
import styles from './Gallery.module.scss';
import Cards from './Cards';
import photos from './photos.json';

function Gallery() {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria!</h2>
        <Tags/>
        <Cards photos={photos} styles={styles}/>

    </section>
  )
}

export default Gallery