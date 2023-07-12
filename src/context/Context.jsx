import { createContext, useContext, useState } from "react";
const AppContext = createContext();
import { useEffect } from "react";
export function AppProvider({ children }) {
  const [loading, setLoading] = useState(null);
  const [desejos, setDesejos] = useState(null);
  const [carrinho, setCarrinho] = useState(null);
  const [carrinhoID, setCarrinhoID] = useState();
  const [categoryId, setCategoryId] = useState(null);
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState(null);
  const [productListId, setProductListId] = useState([]);
  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('listId')
    if(carrinhoSalvo){
      setResult(JSON.parse(carrinhoSalvo))
      
    }
  }, []);

  useEffect(() => {
    carrinho && productListId.push(carrinhoID);
    localStorage.setItem('listId', JSON.stringify(productListId));
  }, [carrinhoID]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        carrinho,
        setCarrinho,
        desejos,
        setDesejos,
        setCarrinhoID,
        carrinhoID,
        categoryId,
        setCategoryId,
        category,
        setCategory,
        search,
        setSearch,
        productListId,
        setProductListId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export function useAppProvider() {
  const context = useContext(AppContext);
  return context;
}
