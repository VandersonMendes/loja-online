import { StyledFlex } from "../../componentes/Flex.style";
import { StyledImg } from "../../componentes/Img.style";
import { StyledH2, StyledH3, StyledSpan, StyledParagrafo } from "../../componentes/Font.style";
import { StyledButton } from "../../componentes/Buttom.style";
import styles from "../../assets/css/Carrinho/Carrinho.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Carrinho = () => {
  const navigate = useNavigate()
  // const [listProducts, setListProducts] = useState([]);
  const [listProducts, setProducts] = useState()
  useEffect(() =>{
    const upgrade = JSON.parse(window.localStorage.getItem('listProducts'));
    setProducts(upgrade);
    if (upgrade) {
      const priceMap = [];
      upgrade.forEach((item, i) => {
        priceMap[i] = {index: i, price: item.price};
      });
      localStorage.setItem('priceMap', JSON.stringify(priceMap));
    }
  },[])
  // const handleClickAdd = (index) =>{
  //   const price = JSON.parse(window.localStorage.getItem('priceMap'));
  // }
  return (
    <section className={`${'container'} ${styles.carrinho}`}>
      {listProducts &&
        <div className={styles.resultContainer}>
          <StyledFlex flexDirection="column">
            <StyledSpan fontSize="1.4rem" weight="900">Resumo da compra</StyledSpan>
            <StyledFlex justifycontent="space-between">
              <StyledSpan fontSize="1.4rem">Sub total</StyledSpan>
              <StyledSpan fontSize="1.4rem">R$ {}</StyledSpan>
            </StyledFlex>

            <StyledFlex justifycontent="space-between">
              <StyledSpan fontSize="1.4rem">Frete</StyledSpan>
              <StyledSpan color="rgb(17, 168, 0)" fontSize="1.4rem">gratuito</StyledSpan>
            </StyledFlex>
          </StyledFlex>

          <StyledFlex justifycontent="center" className={styles.tot}>
            <StyledH3>Total: R$ {}</StyledH3>
          </StyledFlex>
          <StyledFlex className={styles.finalizeCompra} justifycontent="center">
            <StyledButton
              color="#fff"
              backgroudColor="rgb(17, 168, 0)"
              BorderColor="#383838"
              padding="0.5rem 1rem"
              fontSize="1.5rem"
              onClick={() => {
                window.localStorage.clear()
                navigate('/')
                window.location.reload()
              }}
            >
              Finalizar comprar
            </StyledButton>
          </StyledFlex>
        </div>}
      <div className={styles.gridCarrinho}>
        <div>
          <StyledSpan>Produto</StyledSpan>
        </div>
        <div>
          <StyledSpan className={styles.preco}>Preço</StyledSpan>
        </div>
      </div>

      {listProducts ? (
        listProducts.map((item, index) => {
          const itemPrice = window.localStorage.getItem(item.id);
          return (
            <StyledFlex
              flexDirection="column"
              key={item}
              gap="1rem"
              className={styles.carrinho}
            >
              <div className={styles.gridCarrinho}>
                <>
                  <StyledImg
                    maxWidth="140px"
                    src={item.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                  ></StyledImg>
                  <StyledParagrafo className={styles.titleProduct} fontSize="1.25rem">{item.title}</StyledParagrafo>
                </>
                <div>
                  <StyledH3 color="#383838">R${
                    itemPrice ? itemPrice : item.price
                  }</StyledH3>
                  <StyledFlex gap="1rem" justifycontent="center">
                    <StyledButton
                      backgroudColor="#ffbb00"
                      fontSize="1.3rem"
                      padding="0.5rem 0.8rem"
                      BorderColor="#38383899"
                      onClick={() =>{
                        // handleClickRemove(item)
                      }}
                    >
                      -1
                    </StyledButton>

                    <StyledButton
                      backgroudColor="#ffbb00"
                      fontSize="1.3rem"
                      padding="0.5rem 0.8rem"
                      BorderColor="#38383899"
                      onClick={() => {
                        handleClickAdd(item, index);

                      }}
                    >
                      +1
                    </StyledButton>
                  </StyledFlex>
                </div>
              </div>
            </StyledFlex>
          )
        })
      ) : (
        <div className={styles.notProduct}>
          <StyledH2>Não há produtos no carrinho</StyledH2>
        </div>
      )}
    </section>
  );
};

export default Carrinho;