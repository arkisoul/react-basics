import { combineReducers, createStore } from "redux";

import { counterReducer } from "./reducers/counterReducer";
import { productReducer } from "./reducers/productReducer";

const rootReducers = combineReducers({
  counter: counterReducer,
  product: productReducer,
});

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
