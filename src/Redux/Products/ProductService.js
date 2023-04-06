import axios from "axios";

const getProducts = async (noOfProducts) => {
  const response = await axios.get(
    `https://api.escuelajs.co/api/v1/products?offset=0&limit=${noOfProducts}`
  );

  return response.data;
};

//By Catagory
const getProductsByCategory = async (categoryId) => {

  const response = await axios.get(
    `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`
  );

  return response.data;
};


//Single Product
const getSingleProduct = async (id) => {

  const response = await axios.get(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );

  return response.data;
};

const productService = {
  getProducts,
  getProductsByCategory,
  getSingleProduct
};

export default productService;
