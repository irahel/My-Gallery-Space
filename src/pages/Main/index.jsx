import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Banner from './banner.png';
import styles from './Main.module.scss';

function Main() {
  return (
    <>
    <Header/>
    <main>
      <section className={styles.main}>
        <Menu />
        <div className={styles.main__img}>
          <h1>A galeria mais completa do espaço</h1>
          <img src={Banner} alt="A terra vista do espaço" />
        </div>
      </section>
    </main>

    </>
  )
}

export default Main