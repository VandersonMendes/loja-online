import { useEffect, useState } from "react";
import { useAppProvider } from "../../context/Context";
import { getProdutosID } from "../../servises/api";
import { StyledFlex } from "../../componentes/Flex.style";
import styles from "../../assets/css/Products/products.module.css"
import { json } from "react-router-dom";
const Carrinho = () => {
  const { loading, setLoading, carrinhoID, productList, setProductList } =
    useAppProvider();
  const [product, setProduct] = useState(null);
  console.log(product)
  useEffect(() => {
    getProdutos();
  }, [carrinhoID]);
  console.log(productList);
  const getProdutos = async () => {
    try {
      setLoading(true)
      const data = await productList.map((item) => getProdutosID(item));
      const response = await Promise.all(data);
      setProduct(response)
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return(
  <section className="container">
    <StyledFlex flexDirection="row" gap="2rem">
      <div className={styles.img}>d</div>
      <div>da</div>
    </StyledFlex>
  </section>
  )
};

export default Carrinho;
