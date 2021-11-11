import axios from 'axios';

export const ADDPRODUCT = "ADDPRODUCT";
export const REMOVEPRODUCT = "REMOVEPRODUCT";
export const PRODUCT_REQUEST_START = "PRODUCT_REQUEST_START";
export const PRODUCT_REQUEST_SUCCESS = "PRODUCT_REQUEST_SUCCESS";
export const PRODUCT_REQUEST_FAILURE = "PRODUCT_REQUEST_FAILURE";

export const addProduct = (product) => ({
  type: ADDPRODUCT,
  payload: { product: product },
});
export const removeProduct = (productId) => ({
  type: REMOVEPRODUCT,
  payload: { productId: productId },
});
export const productFetchStart = () => ({ type: PRODUCT_REQUEST_START });
export const productFetchSuccess = (products) => ({
  type: PRODUCT_REQUEST_SUCCESS,
  payload: { products },
});
export const productFetchFailure = (error) => ({
  type: PRODUCT_REQUEST_FAILURE,
  payload: { error },
});

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(productFetchStart());
    const res = await axios.get("https://fakestoreapi.com/products");
    const products = res.data;
    dispatch(productFetchSuccess(products))
  } catch (error) {
    dispatch(productFetchFailure(error))
  }
};
