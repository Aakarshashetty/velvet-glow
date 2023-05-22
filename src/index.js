import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./contexts/data-context";
import { CartContextProvider } from "./contexts/cart-context";
import { AuthContextProvider } from "./contexts/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider>
        <CartContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </CartContextProvider>
      </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
