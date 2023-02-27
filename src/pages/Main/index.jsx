import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
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

    </>
  )
}

export default Main