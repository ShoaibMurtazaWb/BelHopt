import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import App from "./App";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Providers from "./context/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
        <Toaster position="top-center" />
        <ReactQueryDevtools initialIsOpen={false} />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
);
