import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledFlex } from "../../componentes/Flex.style";
import { StyledImg } from "../../componentes/Img.style";
import { StyledH2, StyledH3, StyledParagrafo } from "../../componentes/Font.style";
import { StyledButton } from "../../componentes/Buttom.style";
import styles from "../../assets/css/Carrinho/Carrinho.module.css";
import { useAppProvider } from "../../context/Context";
import IconLixeira from "../../assets/img/iconLixeira.svg"

const Carrinho = () => {
  const navigate = useNavigate();
  const { product, setRemoveItem, removeItem } = useAppProvider();
  const [listProducts, setProducts] = useState([]);
  const [itemPrice, setItemPrice] = useState([]);
  const [modifcPrice, setModificPrice] = useState(false);

  useEffect(() => {
    const upgrade = JSON.parse(window.localStorage.getItem("listProducts"));
    setProducts(upgrade);
    setItemPrice(JSON.parse(window.localStorage.getItem("priceMap")));
    setRemoveItem(false)
  }, [product,removeItem]);

  const handleClickAdd = (data, index) => {
    setModificPrice(true);
    const price = JSON.parse(window.localStorage.getItem("priceMap"));
    const updateArray = [...price];
    const qnt = updateArray
      ? Number(updateArray[index].price) + Number(data.price)
      : Number(data.price) + Number(data.price);
    updateArray[index] = { ...updateArray[index], price: qnt };
    window.localStorage.setItem("priceMap", JSON.stringify(updateArray));
  };

  const handleClickDecrease = (data, index) => {
    setModificPrice(true);
    const price = JSON.parse(window.localStorage.getItem("priceMap"));
    const updateArray = [...price];
    const qnt = updateArray && Number(updateArray[index].price) - Number(data.price);
    if (updateArray[index].price <= data.price) {
      return data.price;
    }
    updateArray[index] = { ...updateArray[index], price: qnt };
    window.localStorage.setItem("priceMap", JSON.stringify(updateArray));
  };

  useEffect(() => {
    if (modifcPrice) {
      const storage = JSON.parse(window.localStorage.getItem("priceMap"));
      setItemPrice(storage);
    }
    setModificPrice(false);
  }, [modifcPrice, itemPrice, listProducts]);

  const handleClickRemove = (index) => {
    console.log('ativo')
    const updatedArray = listProducts.filter((_, i) => i !== index);
    localStorage.setItem('listProducts', JSON.stringify(updatedArray));
  }

  return (
    <section className={`${"container"} ${styles.carrinho}`}>

      {listProducts.length && (
        <div>
          <ul className={styles.grid}>
            <li>Descrição</li>
            <li>Quantidade</li>
            <li>SubTotal</li>
          </ul>
        </div>
      )}
      {listProducts.length ? (
        listProducts.map((item, index) => {
          const priceItem = itemPrice && itemPrice[index] ? itemPrice[index].price : 0;
          return (
            <StyledFlex
              flexDirection="column"
              key={item}
              gap="1rem"
              className={styles.carrinho}
            >
              <div className={styles.gridCarrinho}>
                <StyledFlex alignitens="center" gap="10px">
                  <StyledImg
                    maxWidth="140px"
                    src={item.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                  />
                  <StyledParagrafo className={styles.titleProduct} fontSize="1.25rem">
                    {item.title}
                  </StyledParagrafo>
                </StyledFlex>
                <div>
                  <StyledFlex gap="1rem" justifycontent="center">
                    <StyledButton
                      backgroudColor="#ffbb00"
                      fontSize="1.3rem"
                      padding="0.5rem 0.8rem"
                      BorderColor="#38383899"
                      onClick={() => {
                        handleClickDecrease(item, index);
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
                <div>
                  <StyledParagrafo fontSize="1.5rem">{priceItem}</StyledParagrafo>
                </div>
                <div><button onClick={() => {
                  handleClickRemove(index)
                  setRemoveItem(true)
                }}><img src={IconLixeira} alt="iconeLixeira" /></button></div>
              </div>
            </StyledFlex>
          );
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
