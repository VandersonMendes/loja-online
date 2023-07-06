// import React from 'react'
import { Link } from "react-router-dom";
import styles from "../../../assets/css/Home/HeaderHome.module.css";
import carrinho from "../../../assets/img/icons8-carrinho-96.png"
import { useAppProvider } from "../../../context/Context";
const HeaderHome = () => {
  const {setDesejos, desejos} = useAppProvider()

  return (
    <header className='container'>
        <div className={styles.headerFlex}>
          <div className={styles.logo}>
              <a href="/"><h1>Logo</h1></a>
          </div>
          <div className={styles.nav}>
              <nav>
                  {/* O span com com a class 'amout' ele vai ser um objeto com positon absolute irá fica em cima da imagem, monstrando a QUANTIDADE de produtos que estão nos desejos ou no carrinho. */}
                <Link to='/carrinho'>
                <i><img src={carrinho} alt="icone carrinho" /></i><span>carrinho</span><span className={styles.amout}>1</span>
                </Link>
              </nav>
          </div>
        </div>
    </header>
  )
}

export default HeaderHome