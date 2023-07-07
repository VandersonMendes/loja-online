import carteira from "../../../assets/img/carteira.svg"
import styles from "../../../assets/css/Home/feed/Vantagens.module.css";
import localizacao from "../../../assets/img/localizacao.svg";
import desconto from "../../../assets/img/desconto.svg"
import frete from "../../../assets/img/frete.svg"
import trocar from "../../../assets/img/trocar.svg"
const Vantagens = () => {
    return (
        //  {/* As vantagens que a empresa tem */}
        <div className={styles.vantagens}>
                <ul>
                        <div className={`${styles.vantagensList} ${'container'}`}>
                            <li><img src={carteira} alt="icone carteira" /> <span>PAGUE EM ATÉ 10X <br />SEM JUROS*</span></li>
                            <li><img src={localizacao} alt="icone localização" /> <span> RETIRE GRÁTIS <br /> EM NOSSAS LOJAS</span></li>
                            <li><img src={desconto} alt="icone desconto" /> <span> GANHE 20% <br /> DE DESCONTO*</span></li>
                            <li><img src={frete} alt="icone frete" /> <span>FRETE GRÁTIS PARA <br /> REGIÕES SUL E SUDESTE*</span></li>
                            <li> <img src={trocar} alt="icone trocar" /> <span>PRIMEIRA TROCA GRÁTIS</span></li>
                        </div>
                </ul>
        </div>
    )
}

export default Vantagens