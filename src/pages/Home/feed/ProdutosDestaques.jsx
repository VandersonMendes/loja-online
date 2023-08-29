import styles from "../../../assets/css/Home/feed/Destaques.module.css";

import { useEffect, useState } from "react";
import { useAppProvider } from "../../../context/Context";
import { useNavigate } from "react-router-dom";
import {
  StyledH2,
  StyledSpan,
  StyledH4,
} from "../../../componentes/Font.style";
import { StyledButton } from "../../../componentes/Buttom.style";
import { StyledFlex } from "../../../componentes/Flex.style";
import {getCategories, getProductsFromCategory} from "../../../servises/api"
const ProdutosDestaques = () => {
  const {
    loading,
    setLoading,
    categoryId,
    setCategoryId,
    category,
    setCategory,
    setProduct
  } = useAppProvider();
  const navigate = useNavigate();

  const [produtos, setProdutos] = useState(null);


  useEffect(() => {
    getProdutoCategory();
  }, [categoryId]);
  const getProdutoCategory = async () => {
    setLoading(true);
    const data = await getProductsFromCategory(categoryId);
    setProdutos(data.data.results.slice(0, 4));
    setLoading(false);
  };
  

  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    setLoading(true);
    const data = await getCategories();
    setCategory(data.data.slice(0, 8))
    setLoading(false);
  };



  return (
    <div className={`${styles.destaques} ${"container"}`}>
      <StyledFlex alignitens="flex-end" justifycontent="space-between">
        <StyledH2 color="#fff" backgroundColor="#CF5D00">
          Talvez te interesaa
        </StyledH2>
        <StyledH4 color="#CF5D00" backgroundColor="#555555e" onClick={() => navigate('/products')}>
          Ver tudo
        </StyledH4>

      </StyledFlex>
      <StyledFlex
        gap="1rem"
        alignitens="center"
        justifycontent="center"
        wrap="wrap"
        className={styles.flexCategories}
      >

        {category &&
          category.map((cat, index) => (
            <StyledSpan
            tabIndex={index}
              key={cat.id}
              onClick={() => setCategoryId(cat.id)}
              backgroundColor="#F9CA24"
              color="#383838"
              weight="800"
              fontSize="1.25rem"
              borderRadius="15px"
            >
              {cat.name}
            </StyledSpan>
          ))}
      </StyledFlex>

      {loading ? (
        <div className={styles.containerLoading}>
          <span className={styles.loadingProducts}></span>
        </div>
      ) : (
        <ul className={`${styles.destaquesGrid} ${"animeTop"}`}>
          {produtos &&
            produtos.map((result, index) => (
              <li key={result.id} tabIndex={index}>
                <div className={styles.img}>
                  <img
                    src={result.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                    alt="product"
                  />
                </div>
                <div className={styles.text}>
                  <StyledH4 color="#383838" weight="800">
                    R${result.price}
                  </StyledH4>
                  <StyledSpan fontSize="1.5" weight="200">
                    OU 9X DE {Math.round(result.price / 9)}
                  </StyledSpan>
                  <StyledButton
                    color="#fff"
                    fontSize="1.2rem"
                    className={styles.addCarrinho}
                    onClick={() => {
                      setProduct(result)
                    }}
                  >
                    Adicionar no carrinho
                  </StyledButton>
                </div>
              </li>
            ))}
        </ul>
      )}

      {categoryId && (
        <div className={styles.verMais}>
          <StyledButton
            fontSize="1.3rem"
            backgroudColor="#F9CA24"
            BorderColor="#383838"
            color="#383838"
            padding="0.1rem 0.5rem"
            style={{ textAlign: "center" }}
            onClick={() => {
              navigate("/products");
              setCategoryId(categoryId);
            }}
          >
            Ver mais
          </StyledButton>
        </div>
      )}

      {categoryId ? (
        <span></span>
      ) : (
        <StyledFlex justifycontent="center" alignitens="center">
          <StyledH2 color="#25252567" backgroundColor="#63636314">
            Nenhuma categoria selecionado
          </StyledH2>
        </StyledFlex>
      )}
    </div>
  );
};

export default ProdutosDestaques;
