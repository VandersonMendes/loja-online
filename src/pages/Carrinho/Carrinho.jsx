import { useEffect, useState } from "react";
import formatCurrency from "../../servises/FormatPrice";
import { useNavigate } from "react-router-dom";
import { StyledFlex } from "../../componentes/Flex.style";
import { StyledImg } from "../../componentes/Img.style";
import { StyledH2, StyledParagrafo } from "../../componentes/Font.style";
import { StyledButton } from "../../componentes/Buttom.style";
import styles from "../../assets/css/Carrinho/Carrinho.module.css";
import { useAppProvider } from "../../context/Context";
import IconLixeira from "../../assets/img/iconLixeira.svg"
import IconCarrinho from "../../assets/img/carrinhoDeCompas1.svg";
import { CSSTransition } from 'react-transition-group';

const Carrinho = () => {
  const navigate = useNavigate();
  const { product, setRemoveItem, removeItem } = useAppProvider();
  const [listProducts, setProducts] = useState([]);
  const [itemPrice, setItemPrice] = useState([]);
  const [modifcPrice, setModificPrice] = useState(false);
  const [resultTotal, setResultTotal] = useState(null)
  const [cliqueUnico, setCliqueUnico] = useState(false);

  useEffect(() => {
    const upgrade = JSON.parse(window.localStorage.getItem("listProducts"));
    setProducts(upgrade);
    setItemPrice(JSON.parse(window.localStorage.getItem("priceMap")));
    setRemoveItem(false)
  }, [product, removeItem]);

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
    const storage = JSON.parse(window.localStorage.getItem("priceMap"));
    const updatyArrayPrice = storage.filter((_, i) => i !== index)
    const updatedArrayProducts = listProducts.filter((_, i) => i !== index);
    window.localStorage.setItem("priceMap", JSON.stringify(updatyArrayPrice));
    localStorage.setItem('listProducts', JSON.stringify(updatedArrayProducts));

  }
  const handleCalCep = (e) => {
    e.preventDefault();
    if (!cliqueUnico) {
      setCliqueUnico(true)
    }
  }
  useEffect(() => {
    const price = JSON.parse(window.localStorage.getItem("priceMap"));
    const result = price && price.reduce((total, product) => Number(total) + Number(product.price), 0)
    setResultTotal(result)
  }, [modifcPrice, listProducts, removeItem])
  return (
    <section className={`${"container"} ${styles.carrinhoContainer}`}>
      <StyledFlex alignitens="center" >
      {listProducts && listProducts.length ?(
              <StyledFlex alignitens="center" >

              <div className={styles.titleCarrinho}>
              <StyledFlex alignitens="end" gap="15px" className={styles.titile}>
                <StyledImg src={IconCarrinho} width="40px" className={styles.imgCarrinho}></StyledImg>
                <StyledH2 padding1="2rem" fontSize="10px">Meu Carrinho</StyledH2>
              </StyledFlex>
            </div>
          </StyledFlex>
      ):null}
      </StyledFlex>
      <div >
        <div>
          {listProducts && listProducts.length ? (
            <StyledFlex  className={styles.flexProducts}>
              <table>
                <thead className={styles.tableHeader}>
                  <tr>
                    <th>Descrição</th>
                    <th>Qnt</th>
                    <th>Preço</th>
                  </tr>
                </thead>
                <tbody>
                  {listProducts.map((item, index) => {
                    const priceItem = itemPrice && itemPrice[index] ? itemPrice[index].price : '';
                    return (
                      <tr key={item} className={styles.gridCardProducts}>
                        <td>
                          <StyledFlex alignitens="center" gap="10px">
                            <StyledImg
                              maxWidth="100px"
                              src={item.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                            />
                            <StyledParagrafo className={styles.titleProduct} fontSize="0.9rem">
                              {item.title}
                            </StyledParagrafo>
                          </StyledFlex>
                        </td>
                        <td>
                          <StyledFlex gap="0.5rem" justifycontent="center">
                            <StyledButton
                              backgroudColor="#ffbb00"
                              fontSize="1rem"
                              padding="0.2rem 0.5rem"
                              BorderColor="#38383899"
                              onClick={() => {
                                handleClickDecrease(item, index);
                              }}
                            >
                              -
                            </StyledButton>
                            <StyledButton
                              backgroudColor="#ffbb00"
                              fontSize="1rem"
                              padding="0.2rem 0.5rem"
                              BorderColor="#38383899"
                            >
                              {Math.round(priceItem) / Math.round(item.price)}
                            </StyledButton>
                            <StyledButton
                              backgroudColor="#ffbb00"
                              fontSize="1.3rem"
                              padding="0.2rem 0.5rem"
                              BorderColor="#38383899"
                              onClick={() => {
                                handleClickAdd(item, index);
                              }}
                            >
                              +
                            </StyledButton>
                          </StyledFlex>
                        </td>
                        <td>
                          <div>
                            <StyledParagrafo fontSize="1.3rem">{formatCurrency(priceItem, 'BRL')}</StyledParagrafo>
                          </div>
                        </td>
                        <td>
                          <div><button className={styles.buttonRemove} onClick={() => {
                            handleClickRemove(index)
                              / setRemoveItem(true)
                          }}><StyledImg className={styles.IconLixeira} src={IconLixeira} alt="iconeLixeira" /></button></div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <section className={styles.result}>
                <StyledParagrafo fontSize="1rem" className={styles.resumo}>Resumo</StyledParagrafo>
                <StyledFlex justifycontent="space-around" gap="2rem" >
                  <div className={styles.gridResult}>
                    <div >
                      <StyledParagrafo fontSize="1.4rem">SubTotal:</StyledParagrafo>
                      <StyledParagrafo fontSize="1.4rem">Frete:</StyledParagrafo>
                      <StyledParagrafo fontSize="1.4rem" className={styles.resultTot}>Total:</StyledParagrafo>
                    </div>
                    <div >
                      <StyledParagrafo fontSize="1.4rem">{resultTotal && formatCurrency(resultTotal, 'BRL')}
                      </StyledParagrafo>
                      <StyledParagrafo fontSize="1.4rem">Grátis
                      </StyledParagrafo>
                      <StyledParagrafo className={styles.resultTot} fontSize="1.4rem">{cliqueUnico ? formatCurrency(resultTotal + 10, 'BRL') : formatCurrency(resultTotal, 'BRL')}
                      </StyledParagrafo>
                      <StyledFlex>
                      </StyledFlex>
                    </div>

                  </div>

                </StyledFlex>
                <StyledButton fontSize="1.2rem" color="#fff" padding="0.2rem 0.8rem" className={styles.buttonFinalizar}>Finalizar Comprar</StyledButton>
              </section>
            </StyledFlex>
          ) : (
            <div className={styles.notProduct}>
              <StyledH2>Não há produtos no carrinho</StyledH2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Carrinho;
 // <StyledFlex
                //   flexDirection="column"
                //   key={item}
                //   gap="1rem"
                //   className={styles.carrinho}
                // >
                //   <StyledFlex justifycontent="space-around" gap="3rem">

                //     <section className={styles.gridCarrinho}>
                //       <StyledFlex alignitens="center" gap="10px">
                //         <StyledImg
                //           maxWidth="80px"
                //           src={item.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                //         />
                //         <StyledParagrafo className={styles.titleProduct} fontSize="1rem">
                //           {item.title}
                //         </StyledParagrafo>
                //       </StyledFlex>
                //       <div>
                //         <StyledFlex gap="0.5rem" justifycontent="center">
                //           <StyledButton
                //             backgroudColor="#ffbb00"
                //             fontSize="1rem"
                //             padding="0.2rem 0.5rem"
                //             BorderColor="#38383899"
                //             onClick={() => {
                //               handleClickDecrease(item, index);
                //             }}
                //           >
                //             -
                //           </StyledButton>
                //           <StyledButton
                //             backgroudColor="#ffbb00"
                //             fontSize="1rem"
                //             padding="0.2rem 0.5rem"
                //             BorderColor="#38383899"
                //           >
                //             {Math.round(priceItem) / Math.round(item.price)}
                //           </StyledButton>
                //           <StyledButton
                //             backgroudColor="#ffbb00"
                //             fontSize="1.3rem"
                //             padding="0.2rem 0.5rem"
                //             BorderColor="#38383899"
                //             onClick={() => {
                //               handleClickAdd(item, index);
                //             }}
                //           >
                //             +
                //           </StyledButton>
                //         </StyledFlex>
                //       </div>
                //       <div>
                //         <StyledParagrafo fontSize="1.3rem">{formatCurrency(priceItem, 'BRL')}</StyledParagrafo>
                //       </div>
                //       <div><button className={styles.buttonRemove} onClick={() => {
                //         handleClickRemove(index)
                //         setRemoveItem(true)
                //       }}><img src={IconLixeira} alt="iconeLixeira" /></button></div>
                //     </section>
                //     <section className={styles.result}>
                //       <StyledFlex justifycontent="space-around" gap="2rem" alignitens="">
                //         {/* <StyledFlex flexDirection='column' justifycontent='space-between'>
                //           <form onSubmit={(e) => handleCalCep(e)} action="" className={styles.calcFrete}>
                //             <input type="number" maxLength="8" placeholder="Digite seu cep" required />
                //             <StyledButton fontSize="1.2rem" backgroudColor="#77e98c" BorderColor="#00da28" color="#fff" disabled={cliqueUnico} >Calcular Frete</StyledButton>
                //           </form>
                //           <div><StyledButton fontSize="1.2rem" backgroudColor="#993399 " BorderColor="#00da28" color="#fff" onClick={() => navigate('/products')}>Ver mais produtos</StyledButton></div>
                //         </StyledFlex> */}
                //         <div className={styles.gridResult}>
                //           <div>
                //             <StyledParagrafo fontSize="1.4rem">SubTotal:</StyledParagrafo>
                //             <StyledParagrafo fontSize="1.4rem">Frete:</StyledParagrafo>
                //             <StyledParagrafo fontSize="1.4rem">Total:</StyledParagrafo>
                //           </div>
                //           <div>
                //             <StyledParagrafo fontSize="1.4rem">{resultTotal && formatCurrency(resultTotal, 'BRL')}
                //             </StyledParagrafo>
                //             <StyledParagrafo fontSize="1.4rem">{cliqueUnico ? formatCurrency(10, 'BRL') : 'R$0'}
                //             </StyledParagrafo>
                //             <StyledParagrafo fontSize="1.4rem">{cliqueUnico ? formatCurrency(resultTotal + 10, 'BRL') : formatCurrency(resultTotal + 10, 'BRL')}
                //             </StyledParagrafo>
                //             <StyledFlex>
                //             </StyledFlex>
                //           </div>
                //           <StyledButton fontSize="1.2rem" backgroudColor="#50D45D" BorderColor="#00da28" color="#fff" className={styles.finalizeCompra}>Finalizar Comprar</StyledButton>
                //         </div>
                //       </StyledFlex>
                //     </section>
                //   </StyledFlex>
                // </StyledFlex>