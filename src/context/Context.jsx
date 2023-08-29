import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [loading, setLoading] = useState(null);
  const [desejos, setDesejos] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState(null);
  const [product, setProduct] = useState(null);
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const upgrade = JSON.parse(window.localStorage.getItem('listProducts') || '[]');
    setListProducts(upgrade);
  }, [product]);

  useEffect(() => {
    if (product && !listProducts.some(item => item.id === product.id)) {
      // Verificar se o produto já está no carrinho pelo id
      const updatedArray = [...listProducts, product];
      setListProducts(updatedArray);
      window.localStorage.setItem('listProducts', JSON.stringify(updatedArray));
      updatedArray && updatedArray.map((item) =>{
        localStorage.setItem(item.id, JSON.stringify(item.price))
      })
    }
  
  }, [product, listProducts]);

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
    setProduct,
    product,
    listProducts
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
