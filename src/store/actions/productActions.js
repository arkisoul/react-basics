export const ADDPRODUCT = 'ADDPRODUCT'
export const REMOVEPRODUCT = 'REMOVEPRODUCT'

export const addProduct = (product) => ({type: ADDPRODUCT, payload: {product: product}})
export const removeProduct = (productId) => ({
  type: REMOVEPRODUCT,
  payload: { productId: productId },
});