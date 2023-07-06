
import feedResposivoDesktop from "../../../assets/img/homeResposiveDesktop.png"
import feed from "../../../assets/img/feed.svg"
import feedResponsivoMobile from "../../../assets/img/feedResponsivo.png"
import styles from "../../../assets/css/Home/feed/FeedApresentation.module.css"
import { StyledButton } from "../../../componentes/Buttom.style"
import { StyledH1, StyledH2, StyledSpan, StyledH3 } from "../../../componentes/Font.style"
import { StyledImg } from "../../../componentes/Img.style"
const FeedAprentation = () => {
  return (
      <div className={`${styles.feedApresentation}`}>
          <picture>
            <source media="(max-width:800px)" srcSet={feedResponsivoMobile} />
            <source media="(max-width:1200px)" srcSet={feedResposivoDesktop} />
          <StyledImg src={feed} objectFit="fill" alt='imagem home' className={styles.img} />
          </picture>
      
          <div className={styles.text}>
            <StyledH1 color="#383838" lineHeight="40px">Tênis Casual</StyledH1>
            <StyledH2 color="#CF5D00" weight="100">Masculino</StyledH2>
            <div className={styles.preco}>
              <StyledSpan weight="800" color="#383838" >A parti de </StyledSpan>
              <StyledH3 color="#383838" >R$ 79,99</StyledH3>
              <StyledButton fontSize="1.5rem" color="#ffffff" BorderColor="#CF5D00">APROVEITE</StyledButton>
            </div>
          </div>
      </div>
  )
}

export default FeedAprentation