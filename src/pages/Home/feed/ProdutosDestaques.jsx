import styles from "../../../assets/css/Home/feed/Destaques.module.css";
import {
  getProdutos,
  getCategories,
  getProductsFromCategory,
} from "../../../servises/api";
import { useEffect, useState } from "react";
import { useAppProvider } from "../../../context/Context";
import Loading from "../../../pages/Loading";
import {
  StyledH2,
  StyledSpan,
  StyledH3,
  StyledH4,
} from "../../../componentes/Font.style";
import { StyledButton } from "../../../componentes/Buttom.style";
import { StyledFlex } from "../../../componentes/Flex.style";
const ProdutosDestaques = () => {
  const { loading, setLoading, setCarrinho } = useAppProvider();
  const [produtos, setProdutos] = useState(null);
  const [valueProduto, setValueProduto] = useState(null);
  const [category, setCategory] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  // Esse outro será responsavel de puxar os produtos mediante as categorias
  useEffect(() => {
    getProdutoCategory();
  }, [categoryId]);
  const getProdutoCategory = async () => {
    setLoading(true);
    const data = await getProductsFromCategory(categoryId);
    console.log(data.data.results.slice(0,5));
    setLoading(false);
  };

  // Esse efeito será será responsável de puxar as categorias, quando abri o site
  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    setLoading(true);
    const data = await getCategories();
    setCategory(data.slice(0, 5));
    setLoading(false);
  };
  if (loading) return <Loading />;
  return (
    <div className={`${styles.destaques} ${"container"}`}>
      <StyledH2 color="#fff" backgroundColor="#CF5D00">
        Talvez te interesaa
      </StyledH2>
      <StyledFlex
        gap="2rem"
        alignitens="center"
        justifycontent="center"
        wrap="wrap"
      >
        {category &&
          category.map((cat) => (
            <StyledH4
              key={cat.id}
              onClick={() => setCategoryId(cat.id)}
              backgroundColor="#F9CA24"
            >
              {cat.name}
            </StyledH4>
          ))}
      </StyledFlex>

      <ul className={styles.destaquesGrid}>
        {/* {produtos &&
          produtos.map((result) => (
            <li key={result.id}>
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
                  onClick={() => setCarrinho(result.id)}
                  className={styles.addCarrinho}
                >
                  Adicionar no carrinho
                </StyledButton>
              </div>
            </li>
          ))} */}
      </ul>
    </div>
  );
};

export default ProdutosDestaques;
