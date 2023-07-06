import {createContext, useContext, useState } from 'react'
const AppContext = createContext();

export function AppProvider ({ children }) {
    const [ loading, setLoading] = useState(null);
    const [desejos, setDesejos] = useState(null);
    const [carrinho, setCarrinho] = useState(null);
    const [desejosID, setDesejosID] = useState(null);
    const [carrinhoID, setCarrinhoID] = useState(null);
  return (
    <AppContext.Provider value={{loading, setLoading, carrinho, setCarrinho, desejos, setDesejos, desejosID, setCarrinhoID, setDesejosID, carrinhoID}}>{children}</AppContext.Provider>
  )
}
export function useAppProvider() {
    const context = useContext(AppContext);
    return context
}



