import { useEffect, useState } from "react";
import axios from "axios";

import MainLayout from "../../layout/main/Main";
import { Card } from "../../components/card/Card";
import { Product } from "../../components/product/Product";
import "./Products.css";

export const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  /* const getProductsList = () => {
    const productsList = products.map((product) => (
      <Card key={product.id}>
        <Product product={product} />
      </Card>
    ));
    console.log(productsList);
    return productsList;
  }; */

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        // const res = await fetch("https://fakestoreapi.com/products")
        // const products = await res.json()
        // console.log(products)
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error(
          `Error! in fetching products from fakestoreapi ${error.message}`
        );
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <h1>Please be patient... we are loading products list for you</h1>
        {/* {!loading ? 'Loading in progress' : 'Loading is done'}
                {loading && <h1>I am inside jsx conditional render</h1>} */}
      </div>
    );
  } else {
    return (
      <MainLayout
        main={
          <div className="products">
            <h3 className="products-title">Products List</h3>
            <div className="products-list">
              {products.map((product) => (
                <Card
                  key={product.id}
                  children={<Product product={product} />}
                />
              ))}
            </div>
          </div>
        }
        footer={<footer>This is a footer</footer>}
        sidebar={<aside>This is a sidebar</aside>}
      ></MainLayout>
    );
  }
};
