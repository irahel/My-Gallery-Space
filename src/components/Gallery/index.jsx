import Tags from '../Tags';
import styles from './Gallery.module.scss';
import photos from './photos.json';
import fav from './favorito.png';
import open from './open.png';

function Gallery() {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria!</h2>
        <Tags/>
        <ul className={styles.galeria__cards}>
          {photos.map((photo) => {
            return (
              <li key={photo.id} className={styles.galeria__card}>
                <img className={styles.galeria__imagem} src={photo.imagem} alt={photo.titulo} />
                <p className={styles.galeria__descricao}>{photo.titulo}</p>
                <div>
                  <p>{photo.creditos}</p>
                  <span>
                    <img src={fav} alt="Ícone coração de curtir" />
                    <img src={open} alt="Ícone de abrir modal" />
                  </span>
                </div>
              </li>
            )})
          }
        </ul>
    </section>
  )
}

export default Gallery