import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./layout/footer/Footer.tsx";
import Appnav from "./layout/header/Appnav.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Appnav />
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Footer />
    </Provider>
  </React.StrictMode>
);
