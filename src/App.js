import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import HomeComponent from "./containers/home/Home";
import "./App.css";
const AboutComponent = React.lazy(() => import("./containers/about/About"));
const ContactComponent = React.lazy(() =>
  import("./containers/contact/Contact")
);
const ProductsComponent = React.lazy(() =>
  import("./containers/products/Products")
);
const UserComponent = React.lazy(() => import("./containers/user/User"));
const CounterComponent = React.lazy(() => import("./containers/counter/Counter"));

function App() {
  return (
    <BrowserRouter>
      <main className="main-content">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/about">
              <AboutComponent />
            </Route>
            <Route exact path="/contact">
              <ContactComponent />
            </Route>
            <Route path="/products">
              <ProductsComponent />
            </Route>
            <Route exact path="/about-us">
              <Redirect to={"/about"} />
            </Route>
            <Route exact path="/counter">
              <CounterComponent />
            </Route>
            <Route exact path="/user">
              <UserComponent />
            </Route>
            <Route exact path="/login">
              <h1>Login component</h1>
            </Route>
            <Route exact path="/">
              <HomeComponent title={'eMart - Home'} />
            </Route>
            <Route path="*">
              <div className="NotFoundPage">
                <h1>We could not find what you are looking for.</h1>
              </div>
            </Route>
          </Switch>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;
