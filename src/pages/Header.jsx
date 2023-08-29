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
import {useState, useEffect } from "react";
import { useAppProvider } from "../context/Context";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate()
  const [valueSearch, setValueSearch] = useState(null);
  const { setSearch, search, product, listProducts} = useAppProvider();
  const HandleInput = ({ target }) => {
    setValueSearch(target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(valueSearch)
    console.log(search)
    if (valueSearch) {
      navigate('/products')
    }
  }
  const [carrinhoList, setCarrinhoList] = useState(null)


  useEffect(() =>{
    const carrinho = JSON.parse(localStorage.getItem("listProducts"));
    setCarrinhoList(carrinho)
  },[product, listProducts])

  return (
    <header>
      <div className={styles.header}>
        <StyledFlex
          className="container"
          alignitens="center"
          justifycontent="space-around">
          <div><a href="/">
            <StyledH3 color="#fff">Loja Online</StyledH3>
          </a></div>
          <div>
            <StyledFlex gap="0.5rem">
              <StyledImg src={localizacao} alt="localização"/>
              <StyledSpan fontSize='1.1rem' color="#fff"> localização</StyledSpan>

            </StyledFlex>
          </div>
        </StyledFlex>
      </div>

      <StyledFlex
        justifycontent="space-around"
        className={`${'container'} ${styles.flex}`}
      >
        <form onSubmit={handleSubmit}>
          <StyledFlex gap="0.5rem">
            <StyledInput
              type="text"
              colorBorder="#000000"
              padding="0.2rem"
              placeholder="Estou buscando.."
              onChange={HandleInput}
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
          <span className={styles.amout} >{ carrinhoList? carrinhoList.length : 0 }</span>
        </Link>
      </StyledFlex>
    </header>
  );
};

export default Header;
