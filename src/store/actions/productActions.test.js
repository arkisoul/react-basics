import { expect, it, describe } from "@jest/globals";

import * as productActions from "./productActions";

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
