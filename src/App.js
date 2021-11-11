import React, { Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from "react-router-dom";

import "./App.css";
import { DashboardComponent } from "./views";

function App() {
  const accessToken = localStorage.getItem("accessToken");

  return (
    <BrowserRouter>
      <main className="main-content">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <h1>Login Page</h1>
            </Route>
            <Route exact path="/login">
              <h1>Login Page</h1>
            </Route>
            <Route path="/dashboard">
              {accessToken ? <DashboardComponent /> : <Redirect to="/login" />}
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
