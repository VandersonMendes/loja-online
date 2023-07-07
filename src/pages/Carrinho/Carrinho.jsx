import { useEffect } from 'react'
import { useAppProvider } from "../../context/Context";
import { getProdutosID } from '../../servises/api';
const Carrinho = () => {
  const {loading, setLoading, carrinhoID, category } = useAppProvider()
  useEffect(()=>{
      getProduto()
  },[carrinhoID])
  const getProduto = async() =>{
    const data = await getProdutosID(carrinhoID);
    console.log(data)
  }
  return (
    <div>Carrinho</div>
  )
}

export default Carrinho