import { StyledFlex } from "../../componentes/Flex.style";
import { StyledImg } from "../../componentes/Img.style";
import { StyledH2, StyledH3, StyledParagrafo } from "../../componentes/Font.style";
import { StyledButton } from "../../componentes/Buttom.style";
import styles from "../../assets/css/Carrinho/Carrinho.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppProvider } from "../../context/Context";
const Carrinho = () => {
  const navigate = useNavigate()
  const {product} = useAppProvider()
  const [listProducts, setProducts] = useState()
  const [itemPrice, setItemPrice] = useState(null)
  useEffect(() => {
    const upgrade = JSON.parse(window.localStorage.getItem('listProducts'));
    setProducts(upgrade);
    if (upgrade) {
      upgrade.forEach((item) => {
        localStorage.setItem(item.id, JSON.stringify(item.price));
      });
    }
  }, [product, ])
  const handleClickAdd = (data) => {
    const price = window.localStorage.getItem(data.id)

    const qnt =
      Number(price)
        ?
        Number(price) + Number(data.price)
        :
        Number(data.price) + Number(data.price)

    window.localStorage.setItem(data.id, Number(qnt))

  }
  const handleClickRemove = (data) => {
    const price = window.localStorage.getItem(data.id)
    const value = Number(price) - Number(data.price);
    if(value < data.price){
      return data.price;
    }
    window.localStorage.setItem(data.id, Number(value))
  }

  return (
    <section className={`${'container'} ${styles.carrinho}`}>
      <div >
        <ul className={styles.gridCarrinho}>
          <li>Descrição</li>
          <li>Quantidade</li>
          <li>SubTotal</li>
        </ul>
      </div>
      {listProducts ? (
        listProducts.map((item) => {
          return (
            <StyledFlex
              flexDirection="column"
              key={item}
              gap="1rem"
              className={styles.carrinho}
            >
              <div className={styles.gridCarrinho}>
                <StyledFlex
                  alignitens="center" gap='10px'>
                  <StyledImg
                    maxWidth="140px"
                    src={item.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                  ></StyledImg>
                  <StyledParagrafo className={styles.titleProduct} fontSize="1.25rem">{item.title}</StyledParagrafo>
                </StyledFlex
                >
                <div>
                  <StyledFlex gap="1rem" justifycontent="center">
                    <StyledButton
                      backgroudColor="#ffbb00"
                      fontSize="1.3rem"
                      padding="0.5rem 0.8rem"
                      BorderColor="#38383899"
                      onClick={() => {
                        handleClickRemove(item)
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

                      }}
                    >
                      +1
                    </StyledButton>
                  </StyledFlex>
                </div>
                <div>
                <StyledH3 color="#383838">R${
                    itemPrice ? itemPrice : item.price
                  }</StyledH3>
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