import axios from "axios";
// get Categorias 
export async function getCategories() {
  const response = await axios.get('https://api.mercadolibre.com/sites/MLB/categories');
  return response;
}
// GET produtos que vem na categoria
export const  getProductsFromCategory = async (categoryId) => {
    const ENDPOINT_CATEGORY = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    const response = await axios.get(ENDPOINT_CATEGORY);
    return response;
  }

// GET puxar produtos individualmente
export const getProdutosID = async (id) => {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/items/${id}`
    );
    return response;
  } catch (err) {
    console.log("error: " + err);
  }
};
// GET produtos pelo name
export const getProdutos = async (name) => {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLB/search?q=${name}`
    );
    return response;
  } catch (err) {
    console.log("error: " + err);
  }
};
