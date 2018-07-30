import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";
import App from './App'
import AuthOrApp from './authOrApp'
import registerServiceWorker from "./registerServiceWorker";
import AuthExample from './AuthExample'


const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  reducers,
  devTools,
  applyMiddleware(promiseMiddleware, multi, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <AuthOrApp />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
