
import feedResposivoDesktop from "../../../assets/img/homeResposiveDesktop.png"
import feed from "../../../assets/img/feed.svg"
import feedResponsivoMobile from "../../../assets/img/feedResponsivo.png"
import styles from "../../../assets/css/Home/feed/FeedApresentation.module.css"
import { StyledButton } from "../../../componentes/Buttom.style"
import { StyledH1, StyledH2, StyledSpan, StyledH3 } from "../../../componentes/Font.style"
import { StyledImg } from "../../../componentes/Img.style";
import { useNavigate } from "react-router-dom";
import { useAppProvider } from "../../../context/Context";
const FeedAprentation = () => {
  const navigate = useNavigate();
  const {setSearch} = useAppProvider();
  return (
      <div className={`${styles.feedApresentation}`}>
          <picture>
            <source media="(max-width:800px)" srcSet={feedResponsivoMobile} />
            <source media="(max-width:1200px)" srcSet={feedResposivoDesktop} />
          <StyledImg src={feed} objectFit="fill" alt='imagem home' className={styles.img} />
          </picture>
      
          <div className={styles.text}>
            <StyledH1 color="#383838" lineHeight="40px" lineHeight1="20px">Tênis Casual</StyledH1>
            <StyledH2 color="#CF5D00" weight="400">Masculino</StyledH2>
            <div className={styles.preco}>
              <StyledSpan weight="800" color="#383838" fontSize="1.3rem">A parti de </StyledSpan>
              <StyledH3 fontSize="2.9rem" weight="bold" color="#383838" lineHeight="45px"  lineHeight1="25px"   lineHeight2="15px">R$ 79,99</StyledH3>
              <StyledButton fontSize="1.5rem" color="#ffffff" BorderColor="#CF5D00" onClick={() => {
                // Quando aperta os botão irá redimensionar para, produto e ainda irá aparecer produtos relacionados.
                  navigate('/products');
                  setSearch('sapato lascoste')
              }}>APROVEITE</StyledButton>
            </div>
          </div>
      </div>
  )
}

export default FeedAprentation