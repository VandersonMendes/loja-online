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
  const [productList, setProductList] = useState([]);
  const [result, setResult] = useState(null)
  useEffect(() => {
    AddList();
  }, [carrinhoID]);
  const AddList = () => {
    const newList = productList
    carrinho && newList.push(carrinhoID);
    window.localStorage.setItem('list', JSON.stringify(newList))
    
  };

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
        productList,
        setProductList,
        AddList,
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
