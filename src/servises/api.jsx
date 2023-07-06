import axios from "axios";

// get Categorias 
export async function getCategories() {
  const ENDPOINT = "https://api.mercadolibre.com/sites/MLB/categories";
  const response = await axios.get(ENDPOINT);
  return await response.data;
}
// GET produtos que vem na categoria
export const  getProductsFromCategory = async (categoryId) => {
    const ENDPOINT_CATEGORY = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    const response = await axios.get(ENDPOINT_CATEGORY);
    return response;
  }

// GET puxar produtos individualmente
export const getProdutos = async (type, type2) => {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLB/search?q=${type}%20${type2}}`
    );
    return response;
  } catch (err) {
    console.log("error: " + err);
  }
};
