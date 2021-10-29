import { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';

import MainLayout from "../../layout/main/Main";
import { Card } from "../../components/card/Card";
import { Product } from "../../components/product/Product";
import ProductDetailComponent from "./detail/ProductDetail";
import {addProduct} from '../../store/actions/productActions';
import "./Products.css";

export default function Products(props) {
  const [loading, setLoading] = useState(true);
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();
  const productState = useSelector(state => state.product)

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
        dispatch(addProduct(response.data));
        // setProducts(response.data);
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

  return (
    <Switch>
      <Route exact path={path}>
        <MainLayout
          main={
            loading ? (
              <div className="loader">
                <h1>
                  Please be patient... we are loading products list for you
                </h1>
                {/* {!loading ? 'Loading in progress' : 'Loading is done'}
                {loading && <h1>I am inside jsx conditional render</h1>} */}
              </div>
            ) : (
              <div className="products">
                <h3 className="products-title">Products List</h3>
                <div className="products-list">
                  {productState.products.map((product) => (
                    <Link key={product.id} to={`/products/${product.id}/${product.title}`}>
                      <Card children={<Product product={product} />} />
                    </Link>
                  ))}
                </div>
              </div>
            )
          }
          footer={<footer>This is a footer</footer>}
          sidebar={<aside>This is a sidebar</aside>}
        ></MainLayout>
      </Route>
      <Route path={`${path}/:id/:title`}>
        <ProductDetailComponent />
      </Route>
    </Switch>
  );
}

  /* <Link
                      to={`${url}/${product.id}/${product.title}?queryParam=value`}
                      style={{ textDecoration: "none", color: "initial" }}
                    >
                    </Link> */