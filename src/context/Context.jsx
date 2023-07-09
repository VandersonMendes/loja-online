import { createContext, useContext, useState } from "react";
const AppContext = createContext();

export function AppProvider({ children }) {
  const [loading, setLoading] = useState(null);
  const [desejos, setDesejos] = useState(null);
  const [carrinho, setCarrinho] = useState(null);
  const [carrinhoID, setCarrinhoID] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState(null);
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
