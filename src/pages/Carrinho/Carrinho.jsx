import { StyledFlex } from "../../componentes/Flex.style";
import { StyledImg } from "../../componentes/Img.style";
import { StyledH2, StyledH3, StyledSpan } from "../../componentes/Font.style";
import { StyledButton } from "../../componentes/Buttom.style";
import styles from "../../assets/css/Carrinho/Carrinho.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Carrinho = () => {
  const navigate = useNavigate()
  const carrinhoList = JSON.parse(localStorage.getItem("listIdCarrinho"));
  const [finalPrice, updateFinalPrice] = useState([])
  const [result, updateResult] = useState(0);
  const [price, setPrice] = useState(0);
  const [add, setAdd] = useState(0)
  useEffect(() => {
    carrinhoList && carrinhoList.map((res) => {
      const itemPrice = window.localStorage.getItem(res.id);
      const validation = itemPrice === null ? res.price : itemPrice;
      if (itemPrice && !finalPrice.includes(itemPrice)) {
        const listPrice = finalPrice;
        finalPrice && listPrice.push(validation)
        const result = listPrice.reduce((a, b) => a + parseInt(b), 0)
        updateResult(result)

      }
    })
  }, [carrinhoList])

  const handleClickAdd = (data) => {
    const itemPrice = window.localStorage.getItem(data.id)
    const qnt =
      Number(itemPrice)
        ?
        Number(itemPrice) + Number(data.price)
        :
        Number(data.price) + Number(data.price)

    window.localStorage.setItem(data.id, Number(qnt));
    window.location.reload()

  }
  const handleClickRemove = (data) => {
    const itemPrice = window.localStorage.getItem(data.id)
    const value = Number(itemPrice) - Number(data.price);
    if(value < data.price){
      return;
    }
    setPrice(value)
    console.log(value)
    window.localStorage.setItem(data.id, Number(value));
    window.location.reload()
  }

  return (
    <section className={`${'container'} ${styles.carrinho}`}>
      {carrinhoList && 
      <div className={styles.resultContainer}>
      <StyledFlex flexDirection="column">
        <StyledSpan fontSize="1.4rem" weight="900">Resumo da compra</StyledSpan>
        <StyledFlex justifycontent="space-between">
          <StyledSpan fontSize="1.4rem">Sub total</StyledSpan>
          <StyledSpan  fontSize="1.4rem">R$ {result}</StyledSpan>
        </StyledFlex>

        <StyledFlex justifycontent="space-between">
          <StyledSpan  fontSize="1.4rem">Frete</StyledSpan>
          <StyledSpan color="rgb(17, 168, 0)"  fontSize="1.4rem">gratuito</StyledSpan>
        </StyledFlex>
      </StyledFlex>

      <StyledFlex justifycontent="flex-start" className={styles.tot}>
        <StyledH3>Total: </StyledH3>
      </StyledFlex>
      <StyledFlex className={styles.finalizeCompra} justifycontent="center">
        <StyledButton
          color="#fff"
          backgroudColor="rgb(17, 168, 0)"
          BorderColor="#383838"
          padding="0.5rem 1rem"
          fontSize="1.5rem"
          onClick={() =>{
            window.localStorage.clear()
            navigate('/')
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
    
      {carrinhoList ? (
        carrinhoList.map((item) => {
          const itemPrice = window.localStorage.getItem(item.id);
          return (
            <StyledFlex
              flexDirection="column"
              gap="2rem"
              className={styles.carrinho}
            >
              <div className={styles.gridCarrinho}>
                <div>
                  <StyledImg
                    maxWidth="140px"
                    src={item.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                  ></StyledImg>
                </div>
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
                      onClick={() => {
                        handleClickRemove(item);
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
                        handleClickAdd(item);
                        setAdd(add +1)
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
