import { useEffect, useState } from "react";
import { useAppProvider } from "../../context/Context";
import {
  getCategories,
  getProdutos,
  getProductsFromCategory,
} from "../../servises/api";
import styles from "../../assets/css/Products/products.module.css";
import { StyledButton } from "../../componentes/Buttom.style";
import { StyledFlex } from "../../componentes/Flex.style";
import { StyledH3, StyledH4 } from "../../componentes/Font.style";
import { StyledImg } from "../../componentes/Img.style";
const Products = () => {
  const { loading, setLoading, categoryId, setCategoryId, search, setSearch, setCarrinhoID, carrinhoID } =
    useAppProvider();
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [menuMobile, setMenuMobile] = useState(true);
  // to pull the products when to pick up
  useEffect(() => {
    setCategoryId(null);
    getProdutosSearch();
  }, [search]);
  const getProdutosSearch = async () => {
    setLoading(true);
    const data = await getProdutos(search);
    setProducts(data.data.results);
    setLoading(false);
  };
  // to pull the products in select category
  useEffect(() => {
    setSearch(null);
    getCategoriesId();
  }, [categoryId]);
  const getCategoriesId = async () => {
    setLoading(true);
    const data = await getProductsFromCategory(categoryId);
    setProducts(data.data.results);
    setLoading(false);
  };
  // to pull the categories
  useEffect(() => {
    pullCategories();
  }, []);
  const pullCategories = async () => {
    setLoading(true);
    const data = await getCategories();
    setCategories(data.data);
    setLoading(false);
  };
  // console.log(categoryId)
  return (
    <section className="container">
      <div className={styles.toltProducts}>
        {products && products.length ? (
          <StyledH3 color="#ffff">
            Total de Produtos: {products && products.length}
          </StyledH3>
        ) : (
          <div></div>
        )}
      </div>
      {/* NavBar */}
      <StyledFlex >
        <nav className={styles.navBar}>
          {menuMobile &&
            <ul >
              <StyledFlex
                flexDirection="column"
                gap="1rem"
                className={`${styles.nav} ${"container"}`}
              >
                {categories &&
                  categories.map((category) => (
                    <li className={styles.listCategories}>
                      <StyledButton
                        fontSize="1.3rem"
                        backgroudColor="#f7f7f7"
                        BorderColor="#f1f1f18d"
                        padding="0.2rem 1rem"
                        color="#383838"
                        onClick={(e) => setCategoryId(category.id)}
                      >
                        {category.name}
                      </StyledButton>
                    </li>
                  ))}
                <div className={styles.buttonClosed}>
                  <StyledButton
                    padding="0.5rem 1rem"
                    backgroudColor=""
                    onClick={() => setMenuMobile(false)}
                  >
                    X
                  </StyledButton>
                </div>
              </StyledFlex>
            </ul>}

          <div
            className={styles.menuMobile}
            onClick={() => setMenuMobile(!menuMobile)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
        {/* Products */}
        {loading ? (
          <div><span className={styles.loadingProduct}></span>
          </div>
        ) : (
          <ul>
            {products && products.length ? (
              <li>
                <div className={`${styles.gridProduct} ${"animeLeft"}`}>
                  {products &&
                    products.map((product) => (
                      <StyledFlex
                        className={styles.card}
                        flexDirection="column"
                        alignitens="center"
                        justifycontent="center"
                      >
                        <div className={styles.img}>
                          <StyledImg
                            src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                            maxWidth="17rem"
                          />
                        </div>
                        <div className={styles.text}>
                          <StyledH4 fontSize="1.3rem" className={styles.title}>
                            {product.title}
                          </StyledH4>
                          <StyledH4
                            fontSize="1.5rem"
                            weight="700"
                            color="#000000ec"
                            className={styles.price}
                          >
                            R$ {product.price}
                          </StyledH4>
                          <StyledButton
                            fontSize="1.4rem"
                            BorderColor="#ffff"
                            backgroudColor=" #CF5D00"
                            color="#ffff"
                            onClick={() => setCarrinhoID(product.id)}
                          >
                            Adicionar no Carrinho
                          </StyledButton>
                        </div>
                      </StyledFlex>
                    ))}
                </div>
              </li>
            ) : (
              <div className={`${styles.NotProducts} ${"container"}`}>
                <StyledH3>Não existe produtos</StyledH3>
              </div>
            )}
          </ul>

        )}
      </StyledFlex>
    </section>
  );
};

export default Products;
{/* <div>
{products && products.length ? (
          <div className={`${styles.gridProduct} ${"animeLeft"}`}>
            {products &&
 products.map((product) => (
   <StyledFlex
     className={styles.card}
     flexDirection="column"
     alignitens="center"
     justifycontent="center"
   >
     <div className={styles.img}>
       <StyledImg
         src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
         maxWidth="17rem"
       />
     </div>
     <div className={styles.text}>
       <StyledH4 fontSize="1.3rem" className={styles.title}>
         {product.title}
       </StyledH4>
       <StyledH4
         fontSize="1.5rem"
         weight="700"
         color="#000000ec"
         className={styles.price}
       >
         R$ {product.price}
       </StyledH4>
       <StyledButton
         fontSize="1.4rem"
         BorderColor="#ffff"
         backgroudColor=" #CF5D00"
         color="#ffff"
         onClick={() => setCarrinhoID(product.id)}
       >
         Adicionar no Carrinho
       </StyledButton>
     </div>
   </StyledFlex>
 ))}
          </div>
        ) : (
          <div className={`${styles.NotProducts} ${"container"}`}>
            <StyledH3>Não existe produtos</StyledH3>
          </div> */}