import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import { DashboardComponent } from "./views";

function App() {
  return (
    <BrowserRouter>
      <main className="main-content">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/dashboard">
              <DashboardComponent />
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
