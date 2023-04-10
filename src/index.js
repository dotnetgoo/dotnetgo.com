import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./appContext";
import { Provider } from "react-redux";
import { store } from "./store";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>
);