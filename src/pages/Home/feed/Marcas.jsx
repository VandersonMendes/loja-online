import styles from "../../../assets/css/Home/feed/Marcas.module.css";
import adidas from "../../../assets/img/adidas.svg";
import dumond from "../../../assets/img/dumond.svg"
import bebece from "../../../assets/img/bebece.svg"
import viaMarte from "../../../assets/img/via-marte.svg"
const Marcas = () => {
    return (
        <div className={`${styles.marcas} ${'container'}`}>
            <h1>AS MELHORES MARCAS ESTÃO AQUI!</h1>
            <div className={styles.gridMarcas}>
                <div>
                    <img src={adidas} alt="adidas" />
                </div>
                <div>
                    <img src={dumond} alt="dumond" />
                </div>
                <div>
                    <img src={bebece} alt="bebece" />
                </div>
                <div>
                    <img src={viaMarte} alt="via Marte" />
                </div>
            </div>
        </div>
    )
}

export default Marcas