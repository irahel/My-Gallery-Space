import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
import styles from './Main.module.scss';

function Main() {
  return (
    <>
    <Header/>
    <main>
      <section className={styles.main}>
        <Menu />
        <Banner />
      </section>
    </main>
    <div className={styles.galeria}>
      <Gallery />
    </div>
    <Footer/>

    </>
  )
}

export default Main