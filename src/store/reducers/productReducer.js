import { ADDPRODUCT, REMOVEPRODUCT } from "../actions/productActions";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDPRODUCT:
      return { ...state, products: [...state.products, payload.product] };

    case REMOVEPRODUCT:
      const filteredProducts = [...state.products].filter(
        (product) => product.id !== payload.productId
      );
      return { ...state, products: filteredProducts };

    default:
      return state;
  }
};
