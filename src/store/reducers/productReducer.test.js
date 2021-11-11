import { describe, it, expect } from "@jest/globals";

import { initialState, productReducer } from "./productReducer";
import * as productActions from "../actions/productActions";

describe("product reducer", () => {
  const product = {
    id: 1,
    title: "Product title",
    body: "Product description",
    price: 12.99,
  };

  it("should return initial state on store creation", () => {
    expect(productReducer(undefined, {})).toEqual(initialState);
    expect(productReducer(undefined, {})).toMatchSnapshot();
  });

  it("should return updated state on add product action", () => {
    expect(
      productReducer(undefined, productActions.addProduct([product]))
    ).toEqual({
      products: [product],
      loading: false,
      error: null,
    });
    expect(
      productReducer(undefined, productActions.addProduct([product]))
    ).toMatchSnapshot();
    expect(
      productReducer(
        {
          loading: false,
          error: null,
          products: [product],
        },
        productActions.addProduct([
          {
            id: 2,
            title: "another product",
            body: "another product description",
            price: 9.99,
          },
        ])
      )
    ).toEqual({
      products: [
        {
          id: 2,
          title: "another product",
          body: "another product description",
          price: 9.99,
        },
      ],
      loading: false,
      error: null,
    });
    expect(
      productReducer(
        {
          loading: false,
          error: null,
          products: [product],
        },
        productActions.addProduct([
          {
            id: 2,
            title: "another product",
            body: "another product description",
            price: 9.99,
          },
        ])
      )
    ).toMatchSnapshot();
  });

  it("should return updated state on remove product action", () => {
    expect(
      productReducer({
      products: [product],
      loading: false,
      error: null,
    }, productActions.removeProduct(product.id))).toEqual({
      products: [],
      loading: false,
      error: null,
    });
    expect(
      productReducer(
        {
          products: [product],
          loading: false,
          error: null,
        },
        productActions.removeProduct(2)
      )
    ).toEqual({
      products: [product],
      loading: false,
      error: null,
    });
  });
});
