import { expect, it, describe } from "@jest/globals";
import { createStore, applyMiddleware } from "redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";

import * as productActions from "./productActions";
import { productReducer } from "../reducers/productReducer";

jest.mock("axios");
const products = [
  {
    id: 1,
    title: "Product",
    price: 12.99,
  },
];

describe("product async actions using redux-mock-store", () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({});

  beforeEach(() => {
    store.clearActions();
    jest.clearAllMocks();
  });

  it("should dispatch start and success actions", async () => {
    await axios.get.mockResolvedValue({
      data: products,
    });
    return store.dispatch(productActions.fetchProducts()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: productActions.PRODUCT_REQUEST_START,
      });
      expect(actions[0]).toEqual(productActions.productFetchStart());
      expect(actions[1]).toEqual(productActions.productFetchSuccess(products));
    });
  });

  it("should dispatch start and failure actions", async () => {
    const error = new Error("Could not connect to server");
    await axios.get.mockRejectedValue(error);
    return store.dispatch(productActions.fetchProducts()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: productActions.PRODUCT_REQUEST_START,
      });
      expect(actions[0]).toEqual(productActions.productFetchStart());
      expect(actions[1]).toEqual(productActions.productFetchFailure(error));
    });
  });

  it("should match expected action", () => {
    store.dispatch({ type: "Sample action" });
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: "Sample action" });
  });
});

describe("product async actions", () => {
  const store = createStore(productReducer, applyMiddleware(thunk));

  it("should handle fetch product async action creator", async () => {
    await axios.get.mockResolvedValue({
      data: products,
    });
    return store.dispatch(productActions.fetchProducts()).then(() => {
      const state = store.getState();
      expect(state.loading).toBeFalsy();
      expect(state.error).toBeNull();
      expect(state.products.length).toBeGreaterThan(0);
    });
  });
});

describe("product actions", () => {
  const product = {
    id: 1,
    title: "Product title",
    body: "Product description",
    price: 12.99,
  };

  it("should return add product action object", () => {
    expect(productActions.addProduct(product)).toEqual({
      type: productActions.ADDPRODUCT,
      payload: { product },
    });
    expect(productActions.addProduct(product)).toMatchSnapshot();
  });

  it("should return remove product action object", () => {
    expect(productActions.removeProduct(product.id)).toEqual({
      type: productActions.REMOVEPRODUCT,
      payload: { productId: product.id },
    });
    expect(productActions.removeProduct(product.id)).toMatchSnapshot();
  });
});
