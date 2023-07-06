import logo from "../assets/img/paqueta.svg"
import styles from "../assets/css/Footer.module.css"
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`${styles.footerFlex} ${'container'}`}>
            <div>
                <h2>UMA EMPRESA DO GRUPO</h2>
            </div>
                <img src={logo} alt="" />
            <div>
            </div>
        </div>
        </footer>
  )
}

export default Footer