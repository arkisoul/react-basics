import * as actions from "../actions/productActions";

export const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADDPRODUCT:
      return { ...state, products: [...payload.product] };

    case actions.REMOVEPRODUCT:
      const filteredProducts = [...state.products].filter(
        (product) => product.id !== payload.productId
      );
      return { ...state, products: filteredProducts };

    case actions.PRODUCT_REQUEST_START:
      return { ...state, loading: true };

    case actions.PRODUCT_REQUEST_SUCCESS:
      return { ...state, loading: false, products: payload.products };

    case actions.PRODUCT_REQUEST_FAILURE:
      return { ...state, loading: false, error: payload.error };

    default:
      return state;
  }
};
