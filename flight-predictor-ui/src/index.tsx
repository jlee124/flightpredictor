import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { IStoreState } from "./redux/index";
import { reduce } from "./redux/reducers";

import App from "./App";
import "./index.css";
import { airlinesAction } from "./redux/actions";

import registerServiceWorker from "./registerServiceWorker";

const store = createStore<IStoreState, airlinesAction, any, any>(reduce, {
  airlines: []
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
