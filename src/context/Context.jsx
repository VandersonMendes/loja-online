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
  const [removeItem, setRemoveItem] = useState(null)
  useEffect(() => {
    const upgrade = JSON.parse(
      window.localStorage.getItem("listProducts") || "[]"
    );
    setListProducts(upgrade);
  }, [product]);

  useEffect(() => {
    if (product && !listProducts.some((item) => item.id === product.id)) {
      const updatedArray = [...listProducts, product];
      setListProducts(updatedArray);
      window.localStorage.setItem(
        "listProducts",
        JSON.stringify(updatedArray)
      );
    }
  }, [product, listProducts]);

  useEffect(() => {
    if (listProducts) {
      const priceMap = JSON.parse(localStorage.getItem("priceMap") || "[]");
      const arrayUpdate = [...priceMap];
      console.log(priceMap)
      listProducts.forEach((item, i) => {
        arrayUpdate[i] = { 'price': item.price, 'quantity':  priceMap.quantity || 1};
      });

      localStorage.setItem("priceMap", JSON.stringify(arrayUpdate));
    }
  }, [listProducts]);

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
    listProducts,
    removeItem,
    setRemoveItem
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppProvider() {
  const context = useContext(AppContext);
  return context;
}