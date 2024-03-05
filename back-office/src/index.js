import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Router from "./router/Router";
import { store } from "./store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
