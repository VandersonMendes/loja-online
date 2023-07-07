import React from 'react'
import { useAppProvider } from '../../context/Context';
const Products = () => {
    const { loading, setLoading, setCarrinho, categoryId, setCategoryId } =
    useAppProvider();
    console.log(categoryId)
  return (
    <div>Products</div>
  )
}

export default Products