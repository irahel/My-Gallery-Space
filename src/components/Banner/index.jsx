import React from 'react';
import styles from './Banner.module.scss';
import BannerImg from './banner.png';

function Banner() {
  return (
    <div className={styles.banner}>
        <h1>A galeria mais completa do espaço</h1>
        <img src={BannerImg} alt="A terra vista do espaço" />
    </div>
  );
}

export default Banner