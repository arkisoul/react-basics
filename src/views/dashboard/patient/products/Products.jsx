import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../../../store/actions/productActions";

export default function Products(props) {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (productState.loading) {
    return (
      <div
        className="loader"
        style={{ height: "100vh", display: "grid", placeItems: "center" }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="products">
      <h1>Products list</h1>
      {productState.error && (
        <p style={{ color: "red" }}>{productState.error.message}</p>
      )}
      {productState.products && (productState.products.length === 0 ? (
        <p>No products available</p>
      ) : (
        productState.products.map((product) => <h5>{product.title}</h5>)
      ))}
    </div>
  );
}
