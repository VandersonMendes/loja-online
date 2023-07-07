// import React from 'react'
import styles from "../assets/css/Header.module.css";
import localizacao from "../assets/img/localizacao.svg";
import { StyledH3, StyledSpan } from "../componentes/Font.style";
import { StyledFlex } from "../componentes/Flex.style";
import { Link } from "react-router-dom";
import { StyledImg } from "../componentes/Img.style";
import { StyledInput } from "../componentes/Input.style";
import IconCarrinho from "../assets/img/carrinhoDeCompra.svg";
import { StyledButton } from "../componentes/Buttom.style";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        {/* Logo, localizaçar distribuidora */}
        <StyledFlex
          className="container"
          justifycontent="space-around"
          alignitens="center"
          wrap="wrap"
        >
          <StyledH3 color="white" weight="400" fontSize="2.25rem">
            <a href="/" style={{ color: "white" }}>
              LOGO
            </a>
          </StyledH3>

          <StyledFlex alignitens="center" gap="0.5rem">
            <StyledImg width="20px" src={localizacao} alt="encontrar" />
            <StyledSpan color="#ffff" fontSize="1.25rem">Encontre uma distibuidora.</StyledSpan>
          </StyledFlex>
        </StyledFlex>
      </div>
      {/* Procurar os produtos, e entra no carrinho para vizualizar produtos colocados.*/}
      <StyledFlex
        className={`${'container'} ${styles.flex}`}
        justifycontent="space-around"
        alignitens="center"
        padding="2rem 0"
        gap="3rem"
      >
        <form>
          <StyledFlex gap="0.5rem">
            <StyledInput
              type="text"
              colorBorder="#000000"
              padding="0.2rem"
              placeholder="Estou buscando.."
            />
            <StyledButton
              padding="0 1rem"
              backgroudColor="#ffbb00"
              color="#242424"
              className={styles.buttomBuscar}
              fontSize="1.1rem"
            >
              Buscar
            </StyledButton>
          </StyledFlex>
        </form>
        <Link to="/carrinho" style={{ width: "100px" }}>
          <StyledImg
            className={styles.iconCarrinho}
            maxWidth="35%"
            width="100%"
            maxWidthEnpoiter1="40%"
            src={IconCarrinho}
            alt="Icone carrinho"
          />
          <span className={styles.amout}>2</span>
        </Link>
      </StyledFlex>
    </header>
  );
};

export default Header;
