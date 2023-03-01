import React, { useState } from 'react';

import Tags from '../Tags';
import styles from './Gallery.module.scss';
import Cards from './Cards';
import photos from './photos.json';


function Gallery() {
  const [itens, setItens] = useState(photos);
  const tags = [...new Set(photos.map((photo) => photo.tag))];

  const filterPhotos = (tag) => {
    const newPhotos = photos.filter((photo) => photo.tag === tag);
    setItens(newPhotos);
  }

  const resetFilter = () => {
    setItens(photos);
  }

  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria!</h2>
        <Tags tags={tags} filterPhotos={filterPhotos} resetFilter={resetFilter} />
        <Cards photos={itens} styles={styles}/>

    </section>
  )
}

export default Gallery