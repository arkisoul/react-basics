import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import HomeComponent from './containers/home/Home'
import AboutComponent from "./containers/about/About";
import ContactComponent from "./containers/contact/Contact";
import UserComponent from "./containers/user/User";
import { Products } from "./containers/products/Products";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <main className="main-content">
        <Switch>
          <Route exact path="/about">
            <AboutComponent />
          </Route>
          <Route exact path="/contact">
            <ContactComponent />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/about-us">
            <Redirect to={"/about"} />
          </Route>
          <Route exact path="/user">
            <UserComponent />
          </Route>          
          <Route exact path="/login">
            <h1>Login component</h1>
          </Route>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="*">
            <div className="NotFoundPage">
              <h1>We could not find what you are looking for.</h1>
            </div>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
