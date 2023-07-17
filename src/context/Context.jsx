import { createContext, useContext, useState } from "react";
const AppContext = createContext();
import { useEffect } from "react";
export function AppProvider({ children }) {
  const [loading, setLoading] = useState(null);
  const [desejos, setDesejos] = useState(null);
  const [carrinhoID, setCarrinhoID] = useState();
  const [categoryId, setCategoryId] = useState(null);
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState(null);
  const [productListId, setProductListId] = useState([]);
  const [lengthProductsCarrinho, setLengthProductsCarrinho] = useState(null)

  useEffect(() => {
    if (carrinhoID && !productListId.includes(carrinhoID)) {
      const updateList = productListId;
      updateList && updateList.push(carrinhoID);
      window.localStorage.setItem("listIdCarrinho", JSON.stringify(updateList));
      updateList &&
        updateList.map((res) => {
          window.localStorage.setItem(res.id, Number(res.price));
        });
    }
    
  }, [carrinhoID]);
  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
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
        lengthProductsCarrinho,
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
