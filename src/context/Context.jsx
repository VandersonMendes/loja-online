import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [loading, setLoading] = useState(null);
  const [desejos, setDesejos] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState(null);
  const [valueItemCarrinho, setValueItemCarrinho] = useState();
  const [listProducts, setProducts] = useState();
  useEffect(() =>{
    const upgrade = JSON.parse(window.localStorage.getItem('listProducts') || '[]');
    setProducts(upgrade);
  },[valueItemCarrinho])
    useEffect(() =>{
      if(listProducts && !listProducts.includes(valueItemCarrinho)){
        const listUpgrade = [...listProducts, valueItemCarrinho]
        window.localStorage.setItem('listProducts', JSON.stringify(listUpgrade));
      }
    },[valueItemCarrinho])
  const contextValue = {
    loading,
    setLoading,
    desejos,
    setDesejos,
    categoryId,
    setCategoryId,
    category,
    setCategory,
    search,
    setSearch,
    valueItemCarrinho, 
    setValueItemCarrinho
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppProvider() {
  const context = useContext(AppContext);
  return context;
}
