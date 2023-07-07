
import styles from "../assets/css/Footer.module.css";
import footer from "../assets/img/footer.png";
import { StyledFlex } from "../componentes/Flex.style";
import { StyledH4, StyledSpan } from "../componentes/Font.style"
import { StyledInput } from "../componentes/Input.style";
import {StyledButton} from "../componentes/Buttom.style";
import {StyledImg} from "../componentes/Img.style"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <StyledFlex gap="2rem" justifycontent="space-around" flexDirection1="column" alignitens="center" className={`${styles.footerFlex} ${'container'}`}>
            <div>
                <StyledH4>RECEBA NOSSAS OFERTAS<br/> E NOVIDADES EXCLUSIVAS!</StyledH4>
            </div>
            <div>
                <form className={styles.formFooter}>
                    <div>
                        <StyledImg width="40rem" src={footer} alt="Footer Svg" className={styles.imgFooter}/>
                    </div>
                    <StyledFlex flexDirection="column" gap="0.5rem" justifycontent="center">
                        <StyledSpan fontSize="1.4rem">Nois informe seu e-mail!</StyledSpan>
                        <StyledInput type="email" placeholder="Maria@gmail.com" />
                        <StyledButton fontSize="1.5rem" color="#383838" backgroudColor="#f9ca24" onClick={(e) => e.preventDefault()}>Quero receber</StyledButton>
                    </StyledFlex>
                </form>
            </div>
        </StyledFlex>
        </footer>
  )
}

export default Footer