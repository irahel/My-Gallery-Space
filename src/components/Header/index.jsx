import logo from './logo.png'
import search from './search.png'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.header__logo}>
            <img src={logo} alt="Logo My-Space" />
            <h1 className={styles.header__h1}>My Space Gallery</h1>
        </div>
        <div className={styles.header__container}>
            <input className={styles.header__input} type="text" placeholder="O que você procura?" />
            <img src={search} alt="Ícone de lupa" />
        </div>
    </header>
  )
}

export default Header